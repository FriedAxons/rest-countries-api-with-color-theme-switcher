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
    <button onClick={toggleTheme}>
      {/* Display appropriate SVG icon based on the theme */}
      {theme === "dark" ? (
        <img
          src="/rest-countries-api-with-color-theme-switcher/icons/moon.svg"
          alt="Moon Icon"
        />
      ) : (
        <img
          src="/rest-countries-api-with-color-theme-switcher/icons/moon-outline.svg"
          alt="Moon Outline Icon"
        />
      )}
      Dark Mode
    </button>
  );
};

export default ThemeToggle;
