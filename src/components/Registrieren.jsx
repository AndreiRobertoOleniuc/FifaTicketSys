import React, { useState } from "react";
import Axios from "axios";
import {useHistory } from "react-router-dom";

export default function Registrieren({user,setUser}) {
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
    Axios.post("http://localhost:8080/addUser",{
      name: eingabe1,
      pwd: eingabe2,
    })
    .then((response) => {
      console.log(response);
      if(response.data){
        setUser({
          name: eingabe1,
          pwd: eingabe2,
        });
        history.push("/home");
      }else{
        history.push("/");
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
      <div>
       <h1>Register</h1>
       <p>Registrieren</p>
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
             <h1>Register</h1>
            </button>
       </form>
      </div>
    );
}