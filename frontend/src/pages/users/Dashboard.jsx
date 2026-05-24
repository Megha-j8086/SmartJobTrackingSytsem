import {
useNavigate
} from "react-router-dom";

import "../../styles/Dashboard.css";

const jobs=[

{
company:"Google",
role:"Frontend Developer",
status:"Interview"
},

{
company:"Amazon",
role:"Backend Developer",
status:"Applied"
},

{
company:"Microsoft",
role:"Python Developer",
status:"Rejected"
}

];

function Dashboard(){

const navigate=
useNavigate();

return(

<div className="dashboard">

{/* SIDEBAR */}

<div className="sidebar">

<h2>

SMART JOB

</h2>

<ul>

<li>

🏠 Dashboard

</li>

<li
onClick={()=>
navigate("/jobs")
}
>

Jobs

</li>

<li
onClick={()=>
navigate(
"/applications"
)
}
>

Applications

</li>

<li
onClick={()=>
navigate(
"/profile"
)
}
>

👤 Profile

</li>
<li>

⚙ Settings

</li>

</ul>

</div>

{/* CONTENT */}

<div className="content">

<h1>

Welcome Back 👋

</h1>

{/* STATS */}

<div className="cards">

<div className="card">

<h2>24</h2>

<p>

Total Applications

</p>

</div>

<div className="card">

<h2>15</h2>

<p>

Applied

</p>

</div>

<div className="card">

<h2>6</h2>

<p>

Interviews

</p>

</div>

<div className="card">

<h2>3</h2>

<p>

Rejected

</p>

</div>

</div>

{/* ANALYTICS */}

<div className="analytics">

<h2>

Application Analytics

</h2>

<div className="progress">

<div
style={{
width:"80%"
}}
></div>

</div>

<p>

80% Progress

</p>

</div>

{/* RECENT */}

<div className="jobs">

<h2>

Recent Applications

</h2>

{

jobs.map(

(job,index)=>(

<div
key={index}
className="job"
>

<div>

<h3>

{job.role}

</h3>

<p>

{job.company}

</p>

</div>

<span>

{job.status}

</span>

</div>

)

)

}

</div>

{/* PROFILE */}

<div className="profile">

<h2>

Profile Completion

</h2>

<div className="progress">

<div
style={{
width:"65%"
}}
></div>

</div>

<p>

65% Completed

</p>

</div>

</div>

</div>

)

}

export default Dashboard