import "./App.scss";
// import logo from "./logo.svg";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="tsl-h1">
          TitanStar Legends - Rune Mastery Loadout Talent Calculator 9000
        </h1>

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
          <div className="talent-point-counter">
            6/6 <span>Points Spent</span>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
