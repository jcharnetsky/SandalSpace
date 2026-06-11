import { APITester } from "./APITester";
import ArticleList from "./Article/ArticleList";
import ArticleListContainer from "./Article/ArticleListContainer";
import "./index.css";

import logo from "./logo.svg";
import reactLogo from "./react.svg";

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
