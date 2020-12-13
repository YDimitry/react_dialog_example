import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import WebFontLoader from "webfontloader";

import App from "./App";

import "./css/index.css";

// с помощью модуля webfontloader мы загружаем шрифт Open Sans от Google.
WebFontLoader.load({
  google: {
    families: ["Open Sans:300,400,700"],
  },
});

// рендерим компонент App в DOM
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);
