import React, {useState, useContext} from 'react';
import './App.css';
import {useNavigate} from 'react-router-dom'

import MyContext from "./myContext"

//import Users from "./usersDB.json"
//import Docters from "./doctorDB.json"

function Main() {
    const[logInUsername,setLogInUsername] = useState ("");
    const[logInPassword,setLogInPassword] = useState ("");
    const{globalUsername, setGlobalUsername} = useContext(MyContext);


    let navigate = useNavigate();
    
    const handleLogInUsernameChange = (event) => {
        setLogInUsername(event.target.value)
    }

    const handleLogInPasswordChange = (event) => {
        setLogInPassword(event.target.value)
    }
    
    //function RedirectTo(){
    //    navigate('./')
    //}

    function RedirectToDCreate(){
        navigate('./dcreate')
    }

    function RedirectToPCreate(){
        navigate('./pcreate')
    }

    function RedirectToDashboard(){
        if((logInUsername === "test") && (logInPassword=== "Test")){
            setGlobalUsername(logInUsername);
            navigate('./dashboard')
        }else{ 
            alert("Incorrect Username or Password")
        }
    }

    return (
        <div>
            <p style={{fontSize: "32px"}}>The Marketplace</p>
            <p>Health Finance System</p>
            <p>
                <input class="inputField" type="text" placeholder="Enter username" onChange={handleLogInUsernameChange}></input>
            </p>
            <p>
                <input class="inputField" type="password" placeholder="Enter password" onChange={handleLogInPasswordChange}></input>
            </p>
            <p>
                <button class='invertButton' onClick={RedirectToDashboard}>Login</button> 
                <button class='invertButton' onClick={RedirectToPCreate}>Create Patient</button>
                <button class='invertButton' onClick={RedirectToDCreate}>Create Doctor</button>  
            </p>
            <p>version 0.37.6</p>
        </div>
    ); 
}

export default Main;