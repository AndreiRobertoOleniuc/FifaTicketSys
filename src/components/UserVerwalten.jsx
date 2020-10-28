import React,{useState} from "react";
import Axios from "axios";

export default function User({user,setUser}) {
  const [eingabe1,setEingabe1] = useState("");
  const [eingabe2,setEingabe2] = useState("");
  
  const changeName = (e) =>{
    setEingabe1(e.target.value);
  }

  const changePws = (e) =>{
    setEingabe2(e.target.value);
  }
 
    return (
      <div>
       <h1>User Verwalten</h1>
       <p>Verwalten sie ihr Profil</p>
       <p>{user.name}</p>
       <p>{user.pwd}</p>
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
            <button onClick={changeData} type="submit">
              <h1>Login</h1>
            </button>
       </form>
      </div>
    );
}