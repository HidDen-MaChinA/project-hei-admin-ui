import { useState } from "react";
import React from "react";
import LoginForm from "./components/LoginForm/LoginForm";
import Global from "./components/Global/Global";
import { Navigate, Route, BrowserRouter as  Router, Routes } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { useEffect } from "react";
import WebcamCapture from "./components/takepic/Webcam";

function Login(props:{identifiant:Function}) {
  const {identifiant}=props;
  const adminUser = {
    identifiant: "Admin",
    password: "admin123"
  }

  const [user, setUser] = useState({ identifiant: "" });
  const [error, setError] = useState("");

  const Login = (details:any) => {
    console.log(details);

    if (details.identifiant == adminUser.identifiant && details.password == adminUser.password) {
      console.log("Connecté");
      identifiant(true)
      setUser({
        identifiant: details.identifiant,
      })
    }
    if (details.identifiant == adminUser.identifiant && details.password != adminUser.password) {
      console.log("Mot de passe incorrect!");

      setError("Mot de passe incorrect!");
    }
    if (details.identifiant != adminUser.identifiant) {
      console.log("Admin non-reconnu!");

      setError("Admin non-reconnu!");
    }
    if (details.identifiant == "" && details.password == "") {
      console.log("Veuillez entrer vos données");

      setError("Veuillez entrer vos données")
    }
    if (details.identifiant == adminUser.identifiant && details.password == "") {
      console.log("Veuillez entrer votre mot de passe");

      setError("Veuillez entrer votre mot de passe")
    }
  }

  const Logout = () : void=> {
    setUser({ identifiant: "" });
  }
  useEffect(()=>{
    
  },[])
  return (
    <div className="App">
      {(user.identifiant != "") ? (
       <Navigate to={"/home"}/>
      ) : (
        <LoginForm Login={Login} error={error} identified={identifiant} />
      )}
    </div>
  );
}
function App():React.ReactElement{
  const [identified, setIdentified] = useState(false);
  // const navigate= useNavigate()
  useEffect(()=>{
    if(!identified){
      // navigate("/login")
    }
  },[])
  return (<>
    <Router>
      <Routes>
        <Route path="/login" element={<Login identifiant={setIdentified} />} />
        <Route path="/home" element={<Global />} />
        <Route path="/" element={<Navigate to={"/login"} />} />
        <Route path="/attendance" element={<WebcamCapture />}/>
      </Routes>
    </Router>
  </>
  )
}
export default App;
