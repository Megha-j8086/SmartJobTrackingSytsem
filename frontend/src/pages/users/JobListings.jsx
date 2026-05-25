import React,{
useEffect,
useState
} from "react";

import API from "../../api/api";

import ApplicationModal from "../../components/ApplicationModal";

import "../../styles/JobListings.css";

function JobListings(){

const[
jobs,
setJobs
]=useState([]);

const[
selected,
setSelected
]=useState(null);

useEffect(()=>{

loadJobs();

},[]);

const loadJobs=
async()=>{

try{

const res=
await API.get(

"/jobs/",

{

headers:{

Authorization:

`Bearer ${
localStorage.getItem(
"access"
)
}`

}

}

);

setJobs(
res.data
);

}

catch(error){

console.log(
error
);

}

};

const submit=
(jobId,form)=>{

alert(
"Application Submitted"
);

setSelected(
null
);

};

return(

<div className="jobs-page">

<h1>

Available Jobs

</h1>

<div className="job-grid">

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

🏢 {job.company}

</p>

<p>

📍 {job.location}

</p>

<p>

{job.description}

</p>

<p>

Deadline:
{job.deadline}

</p>

<button
onClick={()=>
setSelected(
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

selected &&

<ApplicationModal

job={selected}

submit={submit}

/>

}

</div>

);

}

export default JobListings;