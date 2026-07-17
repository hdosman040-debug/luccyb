import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";
import { cn } from "@/lib/utils";

interface ThemeToggleProps {
  className?: string;
}

export function ThemeToggle({ className }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "relative rounded-full p-2 transition-all duration-300 ease-out focus:outline-none hover:scale-105 active:scale-95",
        className
      )}
      aria-label="Toggle luxury theme"
    >
      <div className="relative h-5 w-5 overflow-hidden">
        <div
          className={cn(
            "absolute inset-0 transition-transform duration-500 ease-in-out",
            theme === "dark" ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          )}
        >
          <Sun className="h-5 w-5 text-gold stroke-[1.5]" />
        </div>
        <div
          className={cn(
            "absolute inset-0 transition-transform duration-500 ease-in-out",
            theme === "dark" ? "-translate-y-6 opacity-0" : "translate-y-0 opacity-100"
          )}
        >
          <Moon className="h-5 w-5 text-gold stroke-[1.5]" />
        </div>
      </div>
    </button>
  );
}
