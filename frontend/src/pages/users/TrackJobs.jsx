import "../../styles/TrackJobs.css";

const jobs=[

{
title:"Frontend Developer",
company:"Google",
status:"Interview"
},

{
title:"Python Developer",
company:"Microsoft",
status:"Applied"
},

{
title:"Backend Developer",
company:"Amazon",
status:"Rejected"
}

]

function TrackJobs(){

return(

<div className="track">

<h1>

Track Your Jobs

</h1>

<p>

Monitor every application
in one dashboard

</p>

<div className="job-grid">

{

jobs.map(

(job,index)=>(

<div
key={index}
className="job-card"
>

<h2>

{job.title}

</h2>

<h3>

{job.company}

</h3>

<span>

{job.status}

</span>

</div>

)

)

}

</div>

</div>

)

}

export default TrackJobs