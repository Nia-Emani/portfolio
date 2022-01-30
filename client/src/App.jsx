import "./App.css";
import Layout from "./components/Layout";
import { Switch, Route } from "react-router-dom";

// Import Bootstrap CSS and JS
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

function App() {
  return (
    <div className="App">
      <Switch>
        <Layout />
      </Switch>
    </div>
  );
}

export default App;
