import React from "react";
import "./index.css";

import logo from "./logo.svg";
import reactLogo from "./react.svg";
import Editor from "./component/editor/editor";
import ArticleListContainer from "./component/article/articleListContainer";

export function App() {
  return (
    <div className="app">
      <div className="logo-container">
        <img src={logo} alt="Bun Logo" className="logo bun-logo" />
        <img src={reactLogo} alt="React Logo" className="logo react-logo" />
      </div>

      <ArticleListContainer />
    </div>
  );
}

export default App;
