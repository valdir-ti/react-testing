import "./App.css";
import { Application } from "./components/application/application";
import { Skills } from "./components/skills/skills";
import { Counter } from "./components/counter/counter";
import { AppProviders } from "./components/providers/app-providers";
import { MuiMode } from "./components/mui/mui-mode";
import { Users } from "./components/users/users";

function App() {
  return (
    <AppProviders>
      <div className="App">
        <Users />
        <br />
        <MuiMode />
        <br />
        <Counter />
        <br />
        <Application />
        <br />
        <Skills skills={["HTML", "CSS", "JavaScript"]} />
      </div>
    </AppProviders>
  );
}

export default App;
