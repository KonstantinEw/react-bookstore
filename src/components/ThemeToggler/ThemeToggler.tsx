import { useEffect, useState } from "react";
import { StyledThemeToggler } from "./styles";

interface IProps {
  type: string;
}

export const ThemeToggler = ({ type }: IProps) => {
  const [theme, setTheme] = useState("light");
  const handleTheme = () => {
    setTheme((theme) => (theme === "light" ? "dark" : "light"));
  };
  useEffect(() => {
    document.documentElement.setAttribute("theme", theme);
  }, [theme]);
  return <StyledThemeToggler type={type} onClick={handleTheme} />;
};
