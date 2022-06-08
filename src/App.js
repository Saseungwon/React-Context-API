import logo from "./logo.svg";
import "./App.css";
import ConsumerEx from "./components/Consumer";
import Static from "./components/StaticEx";
import FunctionalEx from "./components/Functional";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ConsumerEx />
        <Static />
        <FunctionalEx />
      </header>
    </div>
  );
}

export default App;
