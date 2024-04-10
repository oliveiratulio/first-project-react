import React from "react";
import { createRoot } from "react-dom/client"; 
import Home from "./containers/Home";
import Users from "./containers/Users";
import GlobalStyle from "./globalStyle";

const rootElement = document.getElementById("root");

const root = createRoot(rootElement);
root.render(
  <>
    <Users />
    <GlobalStyle />
  </>
);
