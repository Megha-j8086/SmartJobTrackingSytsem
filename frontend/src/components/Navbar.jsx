import React,{
useEffect,
useState
}
from "react";

import {
Link,
useNavigate
}
from "react-router-dom";

import "../styles/Navbar.css";

function Navbar(){

const navigate=
useNavigate();

const[
loggedIn,
setLoggedIn
]=useState(false);

useEffect(()=>{

const user=

localStorage.getItem(
"isLoggedIn"
);

if(user)

if(user){

setLoggedIn(true);

}

},[]);

const logout=()=>{

localStorage.removeItem(
"userRole"
);

localStorage.removeItem(
"isLoggedIn"
);

alert(
"Logged out"
);

navigate("/");

window.location.reload();

};

const openDashboard=()=>{

const role=

localStorage.getItem(
"userRole"
);

if(role==="user"){

navigate(
"/dashboard"
);

}

else if(
role==="recruiter"
){

navigate(
"/recruiter"
);

}

else if(
role==="admin"
){

navigate(
"/admin"
);

}

};

return(

<nav className="navbar">

<div
className="logo"
onClick={()=>
navigate("/")
}
>

SMART JOB TRACKER

</div>

<ul>

<li>

<Link to="/">

Home

</Link>

</li>

<li>

<Link to="/features">

Features

</Link>

</li>

<li>

<Link to="/about">

About Us

</Link>

</li>

{

loggedIn &&

<li
onClick={
openDashboard
}
>

Dashboard

</li>

}

{

!loggedIn &&

<li>

<Link to="/track">

Track Jobs

</Link>

</li>

}

</ul>

<div>

{

!loggedIn ?

<>

<button
className="login"
onClick={()=>
navigate("/login")
}
>

Log In

</button>

<button
className="register"
onClick={()=>
navigate("/register")
}
>

Register

</button>

</>

:

<button
className="logout"
onClick={logout}
>

Logout

</button>

}

</div>

</nav>

)

}

export default Navbar