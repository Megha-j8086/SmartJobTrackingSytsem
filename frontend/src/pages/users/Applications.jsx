import React, {
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

const[
stats,
setStats
]=useState({

total:0,
applied:0,
interview:0,
rejected:0

});


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

const data=
res.data || [];

setApplications(
data
);


/* ANALYTICS */

setStats({

total:
data.length,

applied:
data.filter(
a=>

a.status==="pending" ||

a.status==="applied"

).length,

interview:
data.filter(
a=>

a.status==="review" ||

a.status==="interview"

).length,

rejected:
data.filter(
a=>

a.status==="rejected"

).length

});

}

catch(error){

console.log(
error.response?.data
);

}

};



const getClass=
(status)=>{

if(

status==="pending" ||

status==="applied"

)

return "applied";


if(

status==="review" ||

status==="interview"

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

Track your applications

</p>



<div className="summary-box">

You applied to

<b>

{" "}
{stats.total}
{" "}

</b>

jobs

</div>



<div className="analytics-cards">

<div className="card total">

<h3>

{stats.total}

</h3>

<p>Total</p>

</div>


<div className="card applied">

<h3>

{stats.applied}

</h3>

<p>Applied</p>

</div>


<div className="card interview">

<h3>

{stats.interview}

</h3>

<p>Interview</p>

</div>


<div className="card rejected">

<h3>

{stats.rejected}

</h3>

<p>Rejected</p>

</div>


</div>



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

<span>

Interview

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

{

app.job_title ||

app.job

}

</span>


<span>

{

app.company

||

"Unknown"

}

</span>



<span
className={
getClass(
app.status
)
}
>

{

app.status==="pending"

?

"Applied"

:

app.status

}

</span>



<span>

{

app.status==="interview"

?

<>

<div>

📅

{

app.interview_date

||

"Not Set"

}

</div>

<div>

⏰

{

app.interview_time

||

"Not Set"

}

</div>

{

app.interview_link && (

<a

href={
app.interview_link
}

target="_blank"

rel="noreferrer"

className="join"

>

Join

</a>

)

}

</>

:

"-"

}

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