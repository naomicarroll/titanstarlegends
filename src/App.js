import "./App.scss";
import { TalentWrapper } from "./components/TalentWrapper/TalentWrapper";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <span className="h1-wrapper">
          <h1 className="h1">
            TitanStar Legends - Rune Mastery Loadout Talent Calculator 9000
          </h1>
        </span>
        <TalentWrapper />
      </header>
    </div>
  );
}

export default App;
