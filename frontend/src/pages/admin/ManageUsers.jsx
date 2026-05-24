import React,{
useState
}
from "react";

import {
useNavigate
}
from "react-router-dom";

import "../../styles/ManageUsers.css";

function ManageUsers(){

const navigate=
useNavigate();

const[
users,
setUsers
]=useState([

{
id:1,
name:"Alex",
role:"User"
},

{
id:2,
name:"John",
role:"User"
}

]);

const[
input,
setInput
]=useState("");

const[
edit,
setEdit
]=useState(null);

const add=()=>{

if(!input)
return;

if(edit){

setUsers(

users.map(

u=>

u.id===edit

?{
...u,
name:input
}

:u

)

);

setEdit(null);

}

else{

setUsers([

...users,

{

id:
Date.now(),

name:input,

role:"User"

}

]);

}

setInput("");

};

const remove=(id)=>{

setUsers(

users.filter(

u=>

u.id!==id

)

);

};

return(

<div className="manage">

<button
className="back"
onClick={()=>
navigate(
"/admin"
)
}
>

← Back To Dashboard

</button>

<h1>

Manage Users

</h1>

<div className="top">

<input

value={input}

placeholder="Enter User"

onChange={
(e)=>

setInput(
e.target.value
)

}

/>

<button
onClick={add}
>

{
edit
?

"Update"

:

"Add"

}

</button>

</div>

{

users.map(

(user)=>(

<div
key={user.id}
className="box"
>

<div>

<h3>

{user.name}

</h3>

<p>

{user.role}

</p>

</div>

<div>

<button
onClick={()=>{

setEdit(
user.id
);

setInput(
user.name
);

}}

>

Edit

</button>

<button
onClick={()=>
remove(
user.id
)
}
>

Delete

</button>

</div>

</div>

)

)

}

</div>

)

}

export default ManageUsers