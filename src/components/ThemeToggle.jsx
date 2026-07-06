import { Sun, Moon } from "lucide-react";
import { useTheme } from "../hooks/useTheme";

const ToggleSkeleton = () => (
  <div className="w-14 h-8 bg-[#E4E0D8] dark:bg-[#1B222B] rounded-full animate-pulse" />
);

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
        relative w-14 h-8 rounded-full p-1 transition-all duration-300 border
        focus:outline-none focus:ring-2 focus:ring-offset-2 active:scale-95
        ${
          isDark
            ? "bg-[#1B222B] border-white/10 focus:ring-[#E3A23C]/50 focus:ring-offset-[#0B0F14]"
            : "bg-[#EFEAE1] border-[#DDD5C6] focus:ring-[#C97A22]/40 focus:ring-offset-[#F7F5F0]"
        }
      `}
    >
      <ToggleThumb isDark={isDark} />
    </button>
  );
};

const ToggleThumb = ({ isDark }) => (
  <div
    className={`
      absolute top-1 w-6 h-6 rounded-full shadow-md flex items-center justify-center
      transition-all duration-300
      ${isDark ? "translate-x-6 bg-[#E3A23C]" : "translate-x-0 bg-white"}
    `}
  >
    {isDark ? (
      <Moon size={13} className="text-[#0B0F14]" />
    ) : (
      <Sun size={13} className="text-[#C97A22]" />
    )}
  </div>
);

export default ThemeToggle;