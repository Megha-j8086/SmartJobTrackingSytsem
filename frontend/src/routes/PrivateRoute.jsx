import React from "react";

import {
Navigate
} from "react-router-dom";

function PrivateRoute({

children,
allowedRole

}){

const token=
localStorage.getItem(
"access"
);

const user=
JSON.parse(

localStorage.getItem(
"user"
)

);

if(

!token ||

!user

){

return(

<Navigate
to="/login"
/>

);

}

if(

user.role
!==

allowedRole

){

return(

<Navigate
to="/"
/>

);

}

return children;

}

export default PrivateRoute;