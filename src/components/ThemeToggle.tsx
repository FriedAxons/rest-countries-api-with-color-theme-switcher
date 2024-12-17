import { useEffect, useState } from "react";

const ThemeToggle = (): JSX.Element => {
  const [theme, setTheme] = useState<string>(
    localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    const html = document.documentElement;
    if (theme === "dark") {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <button onClick={toggleTheme} className="flex items-center space-x-2">
      {/* Display appropriate SVG icon based on the theme */}
      {theme === "dark" ? (
        <img
          src="/rest-countries-api-with-color-theme-switcher/icons/moon.svg"
          alt="Moon Icon"
          className="w-4 h-4"
        />
      ) : (
        <img
          src="/rest-countries-api-with-color-theme-switcher/icons/moon-outline.svg"
          alt="Moon Outline Icon"
          className="w-4 h-4"
        />
      )}
      <span>Dark Mode</span>
    </button>
  );
};

export default ThemeToggle;
