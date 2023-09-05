import * as React from "react";
import { Door, IDoor } from "./Door";
import "./App.scss";

const defaultDoors: IDoor[] = [
  { color: "#00243C", code: "420 Baltika" },
  { color: "#070302", code: "793 Temno Korich" },
  { color: "#816951", code: "509 Temno Bejeva" },
  { color: "#437983", code: "427 Sero Goluboy" },
  { color: "#08605D", code: "417 Picunda" },
  { color: "#1E819E", code: "425 Adriatika" },
  { color: "#08588C", code: "470 Bosfor" },
  { color: "#34496F", code: "464 Valentina" },
];

function getDoors(): IDoor[] {
  try {
    const doors = localStorage.getItem("doors");
    if (doors) {
      return JSON.parse(doors);
    }

    return defaultDoors;
  } catch (error) {
    return defaultDoors;
  }
}

function App() {
  const [doors, setDoors] = React.useState(getDoors());
  const [newDoor, setNewDoor] = React.useState({ color: "", code: "" });

  const handleNewDoorInfo = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewDoor((oldDoor) => ({ ...oldDoor, [event.target.name]: event.target.value }));
  };

  const handleAddDoor = () => {
    setDoors((oldDoors) => {
      const newDoors = [newDoor, ...oldDoors];
      localStorage.setItem("doors", JSON.stringify(newDoors));

      return newDoors;
    });
    setNewDoor({ color: "", code: "" });
  };

  return (
    <div className="App">
      <div className="create-door">
        <div className="create-door-input">
          <label htmlFor="color">Color</label>
          <input type="string" value={newDoor.color} name="color" id="color" onChange={handleNewDoorInfo} />
        </div>
        <div className="create-door-input">
          <label htmlFor="code">Code</label>
          <input type="string" value={newDoor.code} name="code" id="code" onChange={handleNewDoorInfo} />
        </div>
        <button disabled={!newDoor.color || !newDoor.code} onClick={handleAddDoor}>
          Add Door
        </button>
      </div>
      <div className="doors">
        {doors.map((door) => (
          <Door key={door.code} color={door.color} code={door.code} />
        ))}
      </div>
    </div>
  );
}

export default App;
