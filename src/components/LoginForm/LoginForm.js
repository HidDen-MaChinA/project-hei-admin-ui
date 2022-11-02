import React, {useState} from 'react'
import { Navigate, Route, BrowserRouter as  Router, Routes } from "react-router-dom";
import "./LoginForm.css";
function LoginForm({Login, error , identified}) {
  const [details, setDetails] = useState({identifiant:"", password:""})

  const submitHandler = e =>{
    e.preventDefault();

    Login(details);
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="form-inner">
        <h2 className='Entrée'>Connectez-vous</h2>
        {(error != "") ? (<div className='error'>{error}</div>) : ""}
        <div className="form-group">
          <label htmlFor="identifiant"> Identifiant: </label>
          <input type="text" name="identifiant" id="identifiant" onChange={e => setDetails({...details, identifiant: e.target.value})} value={details.identifiant}/>
        </div>
        <div className="form-group">
          <label htmlFor="password"> Password: </label>
          <input type="password" name="password" id="password" onChange={e => setDetails({...details, password: e.target.value})} value={details.password}/>
        </div>
        <input type="submit" value="Connexion" onClick={identified!==true ? <Navigate to={"/login"}/>:<Navigate to="/home"/>}/>
      </div>
    </form>
  )
}

export default LoginForm
