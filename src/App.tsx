import "./App.css";
import { Application } from "./components/application/application";
import { Skills } from "./components/skills/skills";
import { Counter } from "./components/counter/counter";
import { AppProvider } from "./components/provider/app-provider";
import { MuiMode } from "./components/mui/mui-mode";

function App() {
  return (
    <AppProvider>
      <div className="App">
        <MuiMode />
        <br />
        <Counter />
        <br />
        <Application />
        <br />
        <Skills skills={["HTML", "CSS", "JavaScript"]} />
      </div>
    </AppProvider>
  );
}

export default App;
