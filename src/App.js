import "./App.scss";
// import logo from "./logo.svg";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="talent-tree">
          <div className="talent-path-container">
            <div className="talent-path">
              <button className="talent-button"></button>
              <button className="talent-button"></button>
              <button className="talent-button"></button>
              <button className="talent-button"></button>
            </div>

            <div className="talent-path">
              <button className="talent-button"></button>
              <button className="talent-button"></button>
              <button className="talent-button"></button>
              <button className="talent-button"></button>
            </div>
          </div>
          <div className="talent-point-counter">6/6</div>
        </div>
      </header>
    </div>
  );
}

export default App;
