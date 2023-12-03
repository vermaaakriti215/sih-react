import React from "react";
import "./App.css";
import "./styles.css";
import lsp from "./lsp.jpg";
import logo from "./logo_final.png";
import client from "./client.jpg";
import login from "./login.jpg";
import emblem from "./emblem.jpg";

function App() {
  return (
    <div className="App">
      <img src={logo} alt="Logo" id="sih-logo" />
      <br />
      <p id="login">
        <img src={login} alt="login" id="client-lsp"></img> LOGIN
      </p>
      <button type="button">
        <img id="client-lsp" src={lsp} alt="LSP" /> LSP
      </button>
      <button type="button">
        <img id="client-lsp" src={client} alt="CLIENT" /> CLIENT
      </button>
      <img src={emblem} id="sih-logo" alt="National Emblem" />
    </div>
  );
}

export default App;
