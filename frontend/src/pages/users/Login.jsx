import React,{
useState
} from "react";

import {
useNavigate
} from "react-router-dom";

import API from "../../api/api";

import "../../styles/Login.css";

function Login(){

const navigate=
useNavigate();

const[
username,
setUsername
]=useState("");

const[
password,
setPassword
]=useState("");

const login=
async()=>{

try{

const res=
await API.post(

"/login/",

{

username,
password

}

);

localStorage.setItem(

"access",

res.data.access

);

localStorage.setItem(

"refresh",

res.data.refresh

);

const profile=
await API.get(

"/profile/",

{

headers:{

Authorization:

`Bearer ${res.data.access}`

}

}

);

localStorage.setItem(

"user",

JSON.stringify(
profile.data
)

);

alert(
"Login Success"
);

if(
profile.data.role==="user"
){

navigate(
"/dashboard"
);

return;

}

if(
profile.data.role==="recruiter"
){

navigate(
"/recruiter"
);

return;

}

if(
profile.data.role==="admin"
){

navigate(
"/admin"
);

return;

}

navigate("/");

}

catch(error){

console.log(
error.response?.data
);

alert(
"Invalid Login"
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
type="text"
placeholder="Username"
value={username}
onChange={
(e)=>
setUsername(
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

No account?

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

);

}

export default Login;