// import React from "react";

// import {
// Navigate
// } from "react-router-dom";

// function PrivateRoute({

// children,
// allowedRole

// }){

// const token =
// localStorage.getItem(
// "access"
// );

// const user =
// JSON.parse(
// localStorage.getItem(
// "user"
// ) || "{}");

// if(!token){

// return(

// <Navigate
// to="/login"
// replace
// />

// );

// }

// if(

// allowedRole &&

// user.role !== allowedRole

// ){

// return(

// <Navigate
// to="/"
// replace
// />

// );

// }

// return children;

// }

// export default PrivateRoute;

import React from "react";
import { Navigate } from "react-router-dom";

function PrivateRoute({

children,
allowedRole

}) {

const user = JSON.parse(
localStorage.getItem("user")
);

if (!user) {

return <Navigate to="/login" />;

}

if (
allowedRole &&
user.role !== allowedRole
) {

return <Navigate to="/" />;

}

return children;

}

export default PrivateRoute;