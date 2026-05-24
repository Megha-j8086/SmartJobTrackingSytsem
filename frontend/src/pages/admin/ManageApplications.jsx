import React,{
useState
}
from "react";

import {
useNavigate
}
from "react-router-dom";

import "../../styles/ManageApplications.css";

const apps=[

{
job:"Frontend",
status:"Applied"
},

{
job:"Python",
status:"Interview"
}

];

function ManageApplications(){
const navigate=
useNavigate();
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

Applications

</h1>

{

apps.map(

(app,index)=>(

<div
key={index}
className="box"
>

<h3>

{app.job}

</h3>

<p>

{app.status}

</p>

<button>

Remove

</button>

</div>

)

)

}

</div>

)

}

export default ManageApplications