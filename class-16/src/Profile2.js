import { useState } from "react";

function Profile2() {

    const [loggedIn, setLoggedIn] = useState(true);

    return(
        <div>
            {
                loggedIn ? <h1>Welcome Rohan</h1> : <h1>Welcome Guest</h1>
            }
        </div>
    )
}

export default Profile2;