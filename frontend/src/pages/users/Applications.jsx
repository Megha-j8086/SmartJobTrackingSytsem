import React,{
useEffect,
useState
} from "react";

import API from "../../api/api";

import "../../styles/Applications.css";

function Applications(){

const[
applications,
setApplications
]=useState([]);

useEffect(()=>{

loadApplications();

},[]);

const loadApplications=
async()=>{

try{

const res=
await API.get(
"/my-applications/"
);

setApplications(
res.data
);

}

catch(error){

console.log(
error.response?.data
);

}

};

const getClass=(status)=>{

if(
status==="pending"
)
return "applied";

if(
status==="review"
)
return "interview";

if(
status==="rejected"
)
return "rejected";

return "selected";

};

return(

<div className="apps">

<h1>

My Applications

</h1>

<p>

Track your job progress

</p>

<div className="table">

<div className="head">

<span>

Job

</span>

<span>

Company

</span>

<span>

Status

</span>

</div>

{

applications.length===0

?

<div className="empty">

No Applications Found

</div>

:

applications.map(

(app)=>(

<div
key={app.id}
className="row"
>

<span>

{app.job_title}

</span>

<span>

{app.company}

</span>

<span
className={
getClass(
app.status
)
}
>

{app.status}

</span>

</div>

)

)

}

</div>

</div>

);

}

export default Applications;