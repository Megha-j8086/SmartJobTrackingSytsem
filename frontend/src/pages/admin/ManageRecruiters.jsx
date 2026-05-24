import React,{
useState
}
from "react";
import {
useNavigate
}
from "react-router-dom";

import "../../styles/ManageRecruiters.css";

function ManageRecruiters(){

const navigate=
useNavigate();

const[
data,
setData
]=useState([

{
id:1,
name:"Google"
},

{
id:2,
name:"Microsoft"
}

]);

const[
name,
setName
]=useState("");

const[
edit,
setEdit
]=useState(null);

const save=()=>{

if(!name)
return;

if(edit){

setData(

data.map(

r=>

r.id===edit

?{
...r,
name
}

:r

)

);

setEdit(null);

}

else{

setData([

...data,

{

id:
Date.now(),

name

}

]);

}

setName("");

};

const del=(id)=>{

setData(

data.filter(

r=>

r.id!==id

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

Manage Recruiters

</h1>

<div className="top">

<input

value={name}

placeholder="Recruiter"

onChange={
(e)=>

setName(
e.target.value
)

}

/>

<button
onClick={save}
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

data.map(

(r)=>(

<div
key={r.id}
className="box"
>

<h3>

{r.name}

</h3>

<div>

<button
onClick={()=>{

setEdit(
r.id
);

setName(
r.name
);

}}

>

Edit

</button>

<button
onClick={()=>
del(
r.id
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

export default ManageRecruiters