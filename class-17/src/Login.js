import { useState } from "react";


function Login() {

    //define State
    const [name, setName] = useState('');
    const [password, setPassword] = useState('')
    const [userError, setUserError] = useState(false);
    const [userPaswwordError, setUserPaswwordError] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();

        if (name === "" || password === "" || name.length < 4 || password.length < 7) {
            alert("Please Type correct value");
        } 
        else {
            alert("Submitted Successfully");
        }
    }

    function userNameHandleFormData(e) {
        let itemName = e.target.value;

        if(itemName.length < 4){
            setUserError(true);
        }
        else {
            setUserError(false);
        }

        setName(itemName);
    }

    function userPasswordHandleFormData(e) {
        let itemPassword = e.target.value;

        if(itemPassword.length <= 6){
            setUserPaswwordError(true);
        }
        else {
            setUserPaswwordError(false);
        }

        setPassword(itemPassword);
    }
    
    return(
        <div>
            <h1>Login Form</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Enter Name" onChange={userNameHandleFormData} /> {userError ?  <span style={{color: 'red'}}><br/><b/>User not Valid</span> : ""}
                <br /><br />
                <input type="password" placeholder="Enter Password" onChange={userPasswordHandleFormData} /> {userPaswwordError ?  <span style={{color: 'red'}}><br/><b/>Password too short</span> : ""}
                <br /><br />
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default Login;