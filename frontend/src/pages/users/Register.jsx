import React,{
useState
} from "react";

import {
useNavigate
} from "react-router-dom";

import "../../styles/Register.css";

function Register(){

const navigate=
useNavigate();

const[
form,
setForm
]=useState({

name:"",
email:"",
password:"",
role:""

});

const change=(e)=>{

setForm({

...form,

[e.target.name]:
e.target.value

})

};

const register=()=>{

if(

!form.name ||

!form.email ||

!form.password ||

!form.role

){

alert(
"Fill all fields"
);

return;

}

localStorage.setItem(

"user",

JSON.stringify(
form
)

);

alert(
"Registered Successfully"
);

navigate(
"/login"
);

};

return(

<div className="auth">

<div className="auth-box">

<h1>

Create Account

</h1>

<input
name="name"
type="text"
placeholder="Full Name"
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
navigate("/login")
}
>

 Login

</span>

</p>

</div>

</div>

)

}

export default Register