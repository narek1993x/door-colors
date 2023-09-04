import { Door } from "./components/Door";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="doors">
        <Door color="#061E22" code="377 Murena" />
        <Door color="#00243C" code="420 Baltika" />
        <Door color="#437983" code="427 Sero Goluboy" />
        <Door color="#1E819E" code="425 Adriatika" />
        <Door color="#08605D" code="417 Picunda" />
        <Door color="#08588C" code="470 Bosfor" />
        <Door color="#34496F" code="464 Valentina" />
        <Door color="#004C2E" code="394 Temno Zeloni" />
        <Door color="#041E1F" code="307 Zeloni Sad" />
      </div>
    </div>
  );
}

export default App;
