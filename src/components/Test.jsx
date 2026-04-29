import { useState, useEffect } from "react";

const TodoApp = () => {
  const [todos, setTodos] = useState(() => {
    try {
      const saved = localStorage.getItem("todos");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });
  const [input, setInput] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState("");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const makeId = () =>
    typeof crypto !== "undefined" && crypto.randomUUID
      ? crypto.randomUUID()
      : String(Date.now() + Math.random());

  const addTodo = () => {
    const text = input.trim();
    if (!text) return;
    setTodos(prev => [...prev, { id: makeId(), text, done: false }]);
    setInput("");
  };

  const toggleTodo = (id) => {
    setTodos(prev => prev.map(t => (t.id === id ? { ...t, done: !t.done } : t)));
  };

  const deleteTodo = (id) => {
    setTodos(prev => prev.filter(t => t.id !== id));
  };

  const startEditing = (id, text) => {
    setEditingId(id);
    setEditText(text);
  };

  const saveEdit = () => {
    const text = editText.trim();
    if (!text) {
      setEditingId(null);
      setEditText("");
      return;
    }
    setTodos(prev => prev.map(t => (t.id === editingId ? { ...t, text } : t)));
    setEditingId(null);
    setEditText("");
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditText("");
  };

  const remaining = todos.filter(t => !t.done).length;

  return (
    <div style={{ maxWidth: 520, margin: "40px auto", padding: 20, border: "1px solid #eee", borderRadius: 12 }}>
      <h2 style={{ marginBottom: 12 }}>✅ My Todo App</h2>

      <div style={{ display: "flex", gap: 8, marginBottom: 16 }}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => { if (e.key === "Enter") addTodo(); }}
          placeholder="Enter todo..."
          aria-label="New todo"
          style={{ flex: 1, padding: 8 }}
        />
        <button onClick={addTodo}>Add</button>
      </div>

      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
        {todos.map((todo) => (
          <li key={todo.id} style={{ display: "flex", alignItems: "center", gap: 8, padding: "6px 0" }}>
            <input
              type="checkbox"
              checked={todo.done}
              onChange={() => toggleTodo(todo.id)}
              aria-label={`Mark ${todo.text} ${todo.done ? "not done" : "done"}`}
            />

            {editingId === todo.id ? (
              <>
                <input
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") saveEdit();
                    if (e.key === "Escape") cancelEdit();
                  }}
                  style={{ flex: 1, padding: 6 }}
                  autoFocus
                />
                <button onClick={saveEdit}>Save</button>
                <button onClick={cancelEdit}>Cancel</button>
              </>
            ) : (
              <>
                <span
                  onDoubleClick={() => startEditing(todo.id, todo.text)}
                  style={{
                    flex: 1,
                    textDecoration: todo.done ? "line-through" : "none",
                    opacity: todo.done ? 0.6 : 1,
                    cursor: "text"
                  }}
                >
                  {todo.text}
                </span>
                <button onClick={() => startEditing(todo.id, todo.text)}>Edit</button>
                <button onClick={() => deleteTodo(todo.id)}>Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>

      <div style={{ marginTop: 12, fontSize: 14 }}>
        {todos.length === 0 ? "No todos yet." : `${remaining} left / ${todos.length} total`}
      </div>
    </div>
  );
};

export default TodoApp;
