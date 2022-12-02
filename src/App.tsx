import { useEffect, useState } from "react";
import { Posts } from "./components/Posts";

export const App = () => {
  const [theme, setTheme] = useState("light");

  const handleTheme = () => {
    setTheme((theme) => (theme === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    document.documentElement.setAttribute("theme", theme);
  }, [theme]);

  return (
    <div className="App">
      <Posts />
    </div>
  );
};
