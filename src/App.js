import logo from "./logo.svg";
import "./App.css";
import Homescreen from "./Screen/Homescreen";
import Login from "./Screen/Login";
import { useState } from "react";

function App() {
  const [user, setUser] = useState(null);

  return (
    <div className=" bg-black">
      {user ? <Homescreen className=" " /> : <Login getin={setUser} />}
    </div>
  );
}

export default App;
