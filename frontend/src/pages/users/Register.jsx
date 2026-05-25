import React,{
useState
} from "react";

import {
useNavigate
} from "react-router-dom";

import API from "../../api/api";

import "../../styles/Register.css";

function Register(){

const navigate=
useNavigate();

const[
form,
setForm
]=useState({

username:"",
email:"",
password:"",
role:""

});

const change=(e)=>{

setForm({

...form,

[e.target.name]:
e.target.value

});

};

const register=
async()=>{

if(

!form.username ||

!form.email ||

!form.password ||

!form.role

){

alert(
"Fill all fields"
);

return;

}

try{

await API.post(

"/register/",

form

);

alert(
"Registered Successfully"
);

navigate(
"/login"
);

}

catch(err){

console.log(
err.response?.data
);

alert(
"Registration Failed"
);

}

};

return(

<div className="auth">

<div className="auth-box">

<h1>

Create Account

</h1>

<input
name="username"
type="text"
placeholder="Username"
onChange={change}
/>

<input
name="email"
type="email"
placeholder="Email"
onChange={change}
/>

<input
name="password"
type="password"
placeholder="Password"
onChange={change}
/>

<select
name="role"
onChange={change}
defaultValue=""
>

<option
value=""
disabled
>

Select Role

</option>

<option value="user">

User

</option>

<option value="recruiter">

Recruiter

</option>

<option value="admin">

Admin

</option>

</select>

<button
onClick={register}
>

Register

</button>

<p>

Already registered?

<span
onClick={()=>
navigate(
"/login"
)
}
>

 Login

</span>

</p>

</div>

</div>

);

}

export default Register;