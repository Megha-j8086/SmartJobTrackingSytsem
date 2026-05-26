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

const[
loading,
setLoading
]=useState(false);



const login=
async()=>{

try{

setLoading(true);

/* LOGIN */

const res=
await API.post(
"/login/",
{
username,
password
}
);

/* SAVE TOKENS */

localStorage.setItem(
"access",
res.data.access
);

localStorage.setItem(
"refresh",
res.data.refresh
);


/* GET PROFILE */

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

/* SAVE USER */

localStorage.setItem(
"user",

JSON.stringify(
profile.data
)

);

console.log(
"PROFILE →",
profile.data
);


/* NAVIGATION */

const role=
profile?.data?.role;

if(role==="user"){

navigate(
"/dashboard",
{
replace:true
}
);

return;

}

if(role==="recruiter"){

navigate(
"/recruiter",
{
replace:true
}
);

return;

}

if(role==="admin"){

navigate(
"/admin",
{
replace:true
}
);

return;

}

/* FALLBACK */

navigate(
"/",
{
replace:true
}
);

}
catch(error){

console.log(
error?.response?.data
);

alert(
"Invalid Login"
);

}
finally{

setLoading(false);

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
disabled={loading}
>

{

loading

?

"Logging..."

:

"Login"

}

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