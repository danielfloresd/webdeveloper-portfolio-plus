import { random } from 'lodash';
import React, { useEffect } from 'react';
import Home from "./components/Home";

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


// const cssPath = `bootswatch/dist/${selectedTheme}/bootstrap.min.css`;
const cssPath = `bootswatch/dist/${selectedTheme}/bootstrap.min.css`;

const importCSS = (path) => {
  return import(`../node_modules/bootswatch/dist/${selectedTheme}/bootstrap.min.css`);
};

function App() {
  useEffect(() => {
    importCSS(selectedTheme).then(cssModule => {
      console.log("cssModule", cssModule)
      const link = document.createElement("link");
      link.href = cssModule.default;
      link.type = "text/css";
      link.rel = "stylesheet";
      document.head.appendChild(link);
    });
  }, []);
  return (
    <>
      <Home css={selectedTheme} />
    </>
  );
}

export default App;
