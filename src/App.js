import "./App.scss";
import { TalentWrapper } from "./components/TalentWrapper/TalentWrapper";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="tsl-h1">
          TitanStar Legends - Rune Mastery Loadout Talent Calculator 9000
        </h1>

        <TalentWrapper />
      </header>
    </div>
  );
}

export default App;
