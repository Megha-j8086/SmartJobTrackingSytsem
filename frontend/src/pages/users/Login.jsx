import React,{
useState
}
from "react";

import {
useNavigate
}
from "react-router-dom";

import "../../styles/Login.css";

function Login(){

const navigate=
useNavigate();

const[
email,
setEmail
]=useState("");

const[
password,
setPassword
]=useState("");

const login=()=>{

const user=

JSON.parse(

localStorage.getItem(
"user"
)

);

if(!user){

alert(
"No account found"
);

return;

}

if(

user.email===email &&

user.password===password

){

/* SAVE SESSION */

localStorage.setItem(

"userRole",

user.role

);

localStorage.setItem(

"isLoggedIn",

true

);

alert(

"Login Successful"

);

/* REDIRECT */

if(
user.role==="user"
){

navigate(
"/dashboard"
);

}

else if(
user.role==="recruiter"
){

navigate(
"/recruiter"
);

}

else if(
user.role==="admin"
){

navigate(
"/admin"
);

}

}

else{

alert(
"Invalid Email or Password"
);

}

};

return(

<div className="auth">

<div className="auth-box">

<h1>

Login

</h1>

<input
type="email"
placeholder="Email"
value={email}
onChange={
(e)=>

setEmail(
e.target.value
)

}
/>

<input
type="password"
placeholder="Password"
value={password}
onChange={
(e)=>

setPassword(
e.target.value
)

}
/>

<button
onClick={login}
>

Login

</button>

<p>

Don't have account?

<span
onClick={()=>
navigate(
"/register"
)
}
>

 Register

</span>

</p>

</div>

</div>

)

}

export default Login