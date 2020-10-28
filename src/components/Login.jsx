import React, { useState } from "react";
import Axios from "axios";
import {useHistory } from "react-router-dom";

export default function Login({user,setUser}) {
  let history = useHistory();
  const [eingabe1,setEingabe1] = useState("");
  const [eingabe2,setEingabe2] = useState("");

  const changeName = (e) =>{
    setEingabe1(e.target.value);
  }

  const changePws = (e) =>{
    setEingabe2(e.target.value);
  }

  const register = (e)=>{
    e.preventDefault();
    Axios.get(`http://localhost:8080/validLogin?name=${eingabe1}&pwd=${eingabe2}`)
    .then((response) => {
      console.log(typeof response.data);
      if(response.data){
        setUser({
          name: eingabe1,
          pwd: eingabe2,
        });
        history.push("/home");
      }else{
        history.push("/login");
      }
    })
    .catch((error) => {
      console.log(error);
    });
    console.log("Post DATA");
    setEingabe1("");
    setEingabe2("");
  }
    return (
      <div className="App">
       <h1>Login</h1>
       <p>Einloggen</p>
       <form>
            <input
              value={eingabe1}
              onChange={changeName}
              type="text"
            />
            <input
              value={eingabe2}
              onChange={changePws}
              type="text"
            />
            <button onClick={register} type="submit">
              <h1>Login</h1>
            </button>
       </form>
      </div>
    );
}