import { useEffect, useState } from "react";
import { BooksList, Header, Subscribe, Title } from "./components";
import { Wrapper } from "./ui";

export const App = () => {
  const [theme, setTheme] = useState("light");
  const handleTheme = () => {
    setTheme((theme) => (theme === "light" ? "dark" : "light"));
  };
  useEffect(() => {
    document.documentElement.setAttribute("theme", theme);
  }, [theme]);

  return (
    <Wrapper>
      <Header />
      <BooksList />
      <Subscribe />
    </Wrapper>
  );
};
