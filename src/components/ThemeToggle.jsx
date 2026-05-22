import { Sun, Moon } from "lucide-react";
import { useTheme } from "../hooks/useTheme";

const ToggleSkeleton = () => {
  return (
    <div className="w-14 h-8 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse" />
  );
};

export const ThemeToggle = () => {
  const { theme, toggle, mounted } = useTheme();

  if (!mounted) return <ToggleSkeleton />;

  const isDark = theme === "dark";

  return (
    <button
      onClick={toggle}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      aria-pressed={isDark}
      className={`
        relative w-14 h-8 rounded-full p-1 transition-all duration-300
        focus:outline-none focus:ring-4 focus:ring-opacity-50 active:scale-95
        ${
          isDark
            ? "bg-gradient-to-r from-purple-600 to-blue-600 focus:ring-purple-400"
            : "bg-gradient-to-r from-yellow-400 to-orange-500 focus:ring-orange-400"
        }
      `}
    >
      <ToggleThumb isDark={isDark} />
      <ToggleIcons isDark={isDark} />
    </button>
  );
};

const ToggleThumb = ({ isDark }) => {
  return (
    <div
      className={`
      absolute top-1 w-6 h-6 bg-white rounded-full shadow-md
      flex items-center justify-center transition-all duration-300
      ${isDark ? "translate-x-6" : "translate-x-0"}
    `}
    >
      <div
        className={`transition-transform duration-300 ${isDark ? "rotate-180" : "rotate-0"}`}
      >
        {isDark ? (
          <Moon size={14} className="text-purple-600" />
        ) : (
          <Sun size={14} className="text-orange-500" />
        )}
      </div>
    </div>
  );
};

const ToggleIcons = ({ isDark }) => {
  return (
    <div className="absolute inset-0 flex items-center justify-between px-2">
      <Sun
        size={12}
        className={`text-white transition-opacity duration-300 ${isDark ? "opacity-70" : "opacity-0"}`}
      />
      <Moon
        size={12}
        className={`text-white transition-opacity duration-300 ${!isDark ? "opacity-70" : "opacity-0"}`}
      />
    </div>
  );
};

export default ThemeToggle;
