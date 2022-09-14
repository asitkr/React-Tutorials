import { useState } from "react";

function Profile3() {

    const [loggedIn, setLoggedIn] = useState(3);

    return(
        <div>
            {
                loggedIn == 1 ? <h1>Welcome User 1</h1> : loggedIn == 2 ? <h1>Welcome User 2</h1> : <h1>Welcome User 3</h1>
            }
        </div>
    )
}

export default Profile3;