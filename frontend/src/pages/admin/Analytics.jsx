
import React,{
useState
}
from "react";

import {
useNavigate
}
from "react-router-dom";
import "../../styles/Analytics.css";

function Analytics(){

 const navigate=
useNavigate();

return(

<div className="analytics-page">


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

Analytics

</h1>

<div className="cards">

<div>

120

<p>

Users</p>

</div>

<div>

350

<p>

Applications</p>

</div>

<div>

45

<p>

Interviews</p>

</div>

</div>

</div>

)

}

export default Analytics