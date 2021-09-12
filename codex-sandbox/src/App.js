import { useState } from "react";
import Counter from "./Counter";
import Users from "./Users";
import "./App.css";

const data = {
  name: "Elle",
  age: 38,
};
function App() {
  const [user, setUser] = useState(data);

  return (
    <div className="App">
      <Counter />
      <Users user={user} />
    </div>
  );
}

export default App;
