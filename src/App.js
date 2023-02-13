import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

import { random } from "lodash";
import React, { useEffect } from "react";
import { useState } from "react";

import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Page from "./components/Page";

const bootswatchThemes = [
  "cerulean",
  "cosmo",
  "cyborg",
  "darkly",
  "flatly",
  "journal",
  "litera",
  "lumen",
  "lux",
  "materia",
  "minty",
  "pulse",
  "sandstone",
  "simplex",
  "sketchy",
  "solar",
  "spacelab",
  "superhero",
  "united",
  "yeti",
];

const selectedTheme = bootswatchThemes[random(0, bootswatchThemes.length - 1)];

const cssPath = `bootswatch/dist/${selectedTheme}/bootstrap.min.css`;

const importCSS = (path) => {
  return import(
    `../node_modules/bootswatch/dist/${selectedTheme}/bootstrap.min.css`
  );
};

function App() {
  const [pages] = useState([
    { name: "About Me" },
    { name: "Portfolio" },
    { name: "Contact" },
    { name: "Resume" },
  ]);

  const [currentPage, setCurrentPage] = useState(pages[0]);

  useEffect(() => {
    importCSS(selectedTheme).then((cssModule) => {
      console.log("cssModule", cssModule);
      const link = document.createElement("link");
      link.href = cssModule.default;
      link.type = "text/css";
      link.rel = "stylesheet";
      document.head.appendChild(link);
    });
  }, []);

  return (
    <div className="App">
      <NavBar
        pages={pages}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      ></NavBar>
      <main>
        <Page currentPage={currentPage}></Page>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
