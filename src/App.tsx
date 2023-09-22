import "./App.css";
import { Application } from "./components/application/application";
import { Skills } from "./components/skills/skills";
import { Counter } from "./components/counter/counter";

function App() {
  return (
    <div className="App">
      <Counter />
      <br />
      <Application />
      <br />
      <Skills skills={["HTML", "CSS", "JavaScript"]} />
    </div>
  );
}

export default App;
