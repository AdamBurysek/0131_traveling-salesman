import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import VidaMenu from "vida-menu";
import HowToPage from "./components/howToPage";
import KnowMorePage from "./components/knowMorePage";
import setup from "../setup.json";
import { HashRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <>
      <HashRouter>
        <VidaMenu setup={setup}>
          <App></App>
          <HowToPage></HowToPage>
          <KnowMorePage></KnowMorePage>
        </VidaMenu>
      </HashRouter>
    </>
  </React.StrictMode>
);

postMessage({ payload: "removeLoading" }, "*");
