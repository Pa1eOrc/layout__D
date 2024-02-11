import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";

import "./App.scss";
import { useEffect, useState } from "react";

export const App = () => {
  const [elementPosition, setElementPosition] = useState(null);

  const handleLinkClick = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: elementPosition,
    });
  };

  useEffect(() => {
    const element = document.getElementById("formId");

    if (element) {
      const rect = element.getBoundingClientRect();
      const position = rect.top;

      setElementPosition(position);
    }
  }, []);

  return (
    <div className="App">
      <Header handleLinkClick={handleLinkClick} />

      <Main handleLinkClick={handleLinkClick} />

      <Footer handleLinkClick={handleLinkClick} />
    </div>
  );
};
