import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
    return (
      <div className="App">
        <Link to="/user">User Verwalten</Link>
        <br/>
        <Link to="/login">Login</Link>
        <br/>
        <Link to="/user">User Verwalten</Link>
        <br/>
       <h1>Home</h1>
       <p>Fifa Ticket kauf system</p>
      </div>
    );
}