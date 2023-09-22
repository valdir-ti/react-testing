import "./App.css";
import { Application } from "./components/application/application";
import { Skills } from "./components/skills/skills";

function App() {
  return (
    <div className="App">
      <Application />
      <br />
      <Skills skills={["HTML", "CSS", "JavaScript"]} />
    </div>
  );
}

export default App;
