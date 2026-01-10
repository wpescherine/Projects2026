import {useState, useContext} from "react";

import './App.css';

import Patient from "./components/account/patientprofile"
import Doctor from "./components/account/doctorprofile"

function Account() {
    const[userType,setUserType]= useState("Doctor")
    const {globalActionPort, setGlobalActionPort} = useContext(MyContext);

    return (
        <div>
            <div>
                <p>Account Details</p>
            </div>
            {userType === "Patient" && <Patient />}
            {userType === "Doctor" && <Doctor />}
        </div>
    ); 
}

export default Account;