import "./App.css";
import Layout from "./components/Layout";
import { Switch, Route } from "react-router-dom";

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
