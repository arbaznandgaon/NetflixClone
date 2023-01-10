import logo from "./logo.svg";
import "./App.css";
import Homescreen from "./Screen/Homescreen";
import Login from "./Screen/Login";
import { useState } from "react";
import { Route,Routes } from "react-router";
import { getAuth, createUserWithEmailAndPassword ,signInWithEmailAndPassword} from "firebase/auth";
import app from "./Firebase"
import { async } from "@firebase/util";
import WatchMovie from "./Screen/WatchMovie";
// import { redirect } from "react-router-dom";


function App() {

  const auth = getAuth(app);


  const schema={email:"" , pass:""}
  const [cred, setCred] = useState(schema);
  const [user, setUser] = useState(null);

const createUser=async () =>{
   await createUserWithEmailAndPassword(auth, cred.email, cred.pass)
  .then(userCredential => {
      const u = userCredential.user;
    setUser(u)
  })
  .catch(error => {
    setUser(null)
  });
}

const loginUser=async () =>{
  await signInWithEmailAndPassword(auth, cred.email, cred.pass)
 .then(userCredential => {
     const u = userCredential.user;
   setUser(u)
 })
 .catch(error => {
   setUser(null)
 });
}



  

// const loader = async () => {
//   const user = await getUser();
//   if (!user) {
//     return redirect("/login");
//   }
// };

  return (
    <div className="">
      {/* {user ? <Homescreen className=" " /> : <Login getin={setUser} />} */}

<Routes>
  <Route path="/watch/:movie_id/:auth" element={<WatchMovie/>}/>
  <Route path="/" element={user ? <Homescreen/> : <Login handle={{createUser,loginUser}} Cred={cred} SCred={setCred}/>}/>
  <Route path="/login" element={<Login  Cred={setCred}/>}/>

</Routes>

    </div>
  );
}

export default App;
