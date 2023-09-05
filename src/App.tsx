import * as React from "react";
import { Door } from "./components/Door";
import "./App.css";

function App() {
  const [doors, setDoors] = React.useState([
    { color: "#00243C", code: "420 Baltika" },
    { color: "#437983", code: "427 Sero Goluboy" },
    { color: "#1E819E", code: "425 Adriatika" },
    { color: "#08605D", code: "417 Picunda" },
    { color: "#08588C", code: "470 Bosfor" },
    { color: "#34496F", code: "464 Valentina" },
  ]);
  const [newDoor, setNewDoor] = React.useState({ color: "", code: ""});


  const handleNewDoor = (event) => {
    setNewDoor(oldDoor => ({ ...oldDoor, [event.target.name]: event.target.value}));
  }

  const handleAddDoor = () => {
    setDoors(oldDoors => ([newDoor, ...oldDoors]));
    setNewDoor({ color: "", code: ""});
  }

  return (
    <div className="App">
      <div className="create-door">
        <div className="create-door-input">
          <label for="color">Color</label>
          <input type="string" value={newDoor.color} name="color" id="color" onChange={handleNewDoor} />
        </div>
        <div className="create-door-input">
          <label for="code">Code</label>
          <input type="string" value={newDoor.code} name="code" id="code" onChange={handleNewDoor} />
        </div>
        <button onClick={handleAddDoor}>Add Door</button>
      </div>
      <div className="doors">
        {doors.map(door =><Door key={door.code} color={door.color} code={door.code} /> )}
      </div>
    </div>
  );
}

export default App;
