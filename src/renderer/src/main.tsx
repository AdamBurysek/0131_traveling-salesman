import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import App from "./App";
import VidaMenu from "vida-menu";
import HowToPage from "./components/infoPages/howToPage";
import KnowMorePage from "./components/infoPages/knowMorePage";
import setup from "../setup.json";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <HashRouter>
      <VidaMenu setup={setup}>
        <App />
        <HowToPage />
        <KnowMorePage />
      </VidaMenu>
    </HashRouter>
  </React.StrictMode>
);

postMessage({ payload: "removeLoading" }, "*");
