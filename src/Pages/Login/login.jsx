import {useState} from "react"
import { Button } from "../../utility/Button/button";
import "./login.css";


export function Login(){

    let [username, setUsername] = useState("");
    let [password, setPassword] = useState("");

    function updateUsername(e){
        setUsername(e.target.value);
    }

    function updatePassword(e){
        setUsername(e.target.value);
    }

    function handleClick(e){
        e.preventDefault();
        console.log("Username: ", username, " Password: ", password);
    }

    return (
        <div className = "background-overlay">
            <div className="container">
                <h1>Login</h1>
                <input type="text" placeholder="Username" onChange={updateUsername}></input>
                <input type="password" placeholder="Password"></input>
                <p>asd</p>
                <Button handleClick = {handleClick}>Login</Button>
            </div>
        </div>
    )
}