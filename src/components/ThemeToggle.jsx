import { useTheme } from "./ThemeProvider";
import { Sun, Moon } from "lucide-react"; 

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-800"
    >
      {theme === "dark" ? <Sun className="h-6 w-6 text-yellow-500" /> : <Moon className="h-6 w-6 text-gray-900" />}
    </button>
  );
}