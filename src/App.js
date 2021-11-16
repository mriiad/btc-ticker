import "./App.css";
import BitcoinTracker from "./component/BitcoinTracker";
import logo from "./logo.svg";

function App() {
  document.title = "Bitcoin Ticker App";
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Bitcoin ticker using React</h2>
        <BitcoinTracker />
      </header>
    </div>
  );
}

export default App;
