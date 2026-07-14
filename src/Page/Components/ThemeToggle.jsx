import React, { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

function ThemeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window === "undefined") return true;
    const storedTheme = localStorage.getItem("theme");
    return storedTheme === "dark" || !storedTheme;
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <button
      className={cn(
        "fixed top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300",
        "focus:outline-none "
      )}
      onClick={toggleTheme}
      aria-label="Toggle Theme"
    >
      {isDarkMode ? (
        <Sun />
      ) : (
        <Moon  />
      )}
    </button>
  );
}

export default ThemeToggle;
