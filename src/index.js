import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import WebFontLoader from "webfontloader";
import dayjs from "dayjs";

import App from "./App";

import "dayjs/locale/ru";
import "./css/index.css";

// с помощью модуля webfontloader мы загружаем шрифт Open Sans от Google.
WebFontLoader.load({
  google: {
    families: ["Open Sans:300,400,700"],
  },
});

dayjs.locale("ru");
// рендерим компонент App в DOM
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);
