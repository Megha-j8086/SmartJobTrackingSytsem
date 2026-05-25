import React from "react";

import {
Link,
useNavigate
} from "react-router-dom";

import "../styles/Navbar.css";

function Navbar(){

const navigate=
useNavigate();

const user=
JSON.parse(
localStorage.getItem(
"user"
)
);

const logout=()=>{

localStorage.removeItem(
"access"
);

localStorage.removeItem(
"refresh"
);

localStorage.removeItem(
"user"
);

navigate("/");

};

const dashboardRoute=()=>{

if(!user)
return "/";

if(
user.role==="user"
)
return "/dashboard";

if(
user.role==="recruiter"
)
return "/recruiter";

if(
user.role==="admin"
)
return "/admin";

return "/";

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

<li>

<Link to="/track">

Track Jobs

</Link>

</li>

{

user &&

<li>

<Link
to={
dashboardRoute()
}
>

Dashboard

</Link>

</li>

}

</ul>

<div>

{

user

?

<button
className="logout"
onClick={logout}
>

Logout

</button>

:

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

}

</div>

</nav>

);

}

export default Navbar;