import { useState } from "react";

//Conditional rendering | If Condition
//not recommended this way

function Profile1() {

    const [loggedIn, setLoggedIn] = useState(true);

    if(loggedIn) {
        return(
            <h1>Welcome Ashit</h1>
        )
    }
    else {
        return(
            <h1>Welcome Guest</h1>
        )
    }
}

export default Profile1;