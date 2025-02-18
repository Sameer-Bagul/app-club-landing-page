import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const storedTheme = localStorage.getItem("theme") || "system";
  const [theme, setTheme] = useState(storedTheme);

  useEffect(() => {
    const root = document.documentElement; ``
    root.classList.remove("light", "dark");

    if (theme === "system")  {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
      root.classList.add(systemTheme);
    } else {
      root.classList.add(theme);
    }

    localStorage.setItem("theme", theme);
  }, [theme]);

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  return useContext(ThemeContext);
}