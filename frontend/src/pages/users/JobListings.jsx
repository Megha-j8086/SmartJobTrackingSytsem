import React,{
useState
} from "react";

import ApplicationModal from "../../components/ApplicationModal";

import "../../styles/JobListings.css";

const jobs=[

{
id:1,
title:"Frontend Developer",
company:"Google",
deadline:"2026-05-30"
},

{
id:2,
title:"Python Developer",
company:"Microsoft",
deadline:"2026-06-10"
},

{
id:3,
title:"Backend Developer",
company:"Amazon",
deadline:"2026-05-28"
}

];

function JobListings(){

const[
selectedJob,
setSelectedJob
]=useState(null);

const[
applied,
setApplied
]=useState([]);

const openApply=(job)=>{

if(
applied.includes(
job.id
)
){

alert(
"Already Applied"
);

return;

}

const today=
new Date();

const deadline=
new Date(
job.deadline
);

if(
today>deadline
){

alert(
"Application Closed"
);

return;

}

setSelectedJob(
job
);

};

const submit=(id,data)=>{

if(id===null){

alert(
"Application cancelled"
);

setSelectedJob(
null
);

return;

}

setApplied([

...applied,

id

]);

console.log(
data
);

alert(
"Application Submitted Successfully"
);

setSelectedJob(
null
);

};

return(

<div className="jobs-page">

<h1>

Available Jobs

</h1>

<div className="jobs-grid">

{

jobs.map(

(job)=>(

<div
key={job.id}
className="job-card"
>

<h2>

{job.title}

</h2>

<p>

{job.company}

</p>

<p>

Deadline:

{job.deadline}

</p>

<button
onClick={()=>
openApply(
job
)
}
>

Apply

</button>

</div>

)

)

}

</div>

{

selectedJob &&

<ApplicationModal

job={selectedJob}

submit={submit}

/>

}

</div>

)

}

export default JobListings