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

 const changeData = (e)=>{
  e.preventDefault();
  Axios.post(`http://localhost:8080/changeData?name=${eingabe1}&pwd=${eingabe2}`,{
    name: user.name,
    pwd: user.pwd,
  })
  .then((response) => {
    console.log(response);
    if(response.data){
      setUser({
        name: eingabe1,
        pwd: eingabe2,
      })
    }else{}
  })
  .catch((error) => {
    console.log(error);
  });
 }
  return (
      <div>
       <h1>User Verwalten</h1>
       <p>Verwalten sie ihr Profil</p>
       <p>Name: {user.name}</p>
       <p>Password: {user.pwd}</p>
       <form>
            <input
              value={eingabe1}
              onChange={changeName}
              type="text"
              placeholder="Name"
            />
            <input
              value={eingabe2}
              onChange={changePws}
              type="text"
              placeholder="Password"
            />
            <button onClick={changeData} type="submit">
              <h1>Change Name</h1>
            </button>
       </form>
      </div>
    );
}