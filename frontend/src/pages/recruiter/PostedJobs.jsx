import React,{
useEffect,
useState
} from "react";

import API from "../../api/api";

import "../../styles/PostedJobs.css";

function PostedJobs(){

const[
jobs,
setJobs
]=useState([]);

useEffect(()=>{

loadJobs();

},[]);


const loadJobs=
async()=>{

try{

const res=
await API.get(
"/my-jobs/"
);

setJobs(
res.data
);

}

catch(err){

console.log(
err.response?.data
);

}

};



return(

<div className="posted">

<h1>

Posted Jobs

</h1>


{

jobs.length===0

?

<p>

No jobs posted

</p>

:

<div className="grid">

{

jobs.map(

(job)=>(

<div
key={job.id}
className="card"
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

</div>

)

)

}

</div>

}

</div>

);

}

export default PostedJobs;