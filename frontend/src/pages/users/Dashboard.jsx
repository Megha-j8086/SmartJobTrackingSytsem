import React, {
useEffect,
useState
} from "react";

import {
useNavigate
} from "react-router-dom";

import API from "../../api/api";

import "../../styles/Dashboard.css";

function Dashboard(){

const navigate=
useNavigate();


const[
stats,
setStats
]=useState({

total:0,
applied:0,
interview:0,
rejected:0

});


const[
profile,
setProfile
]=useState({

phone:"",
linkedin:"",
experience:"",
resume:null

});


const[
jobs,
setJobs
]=useState([]);



useEffect(()=>{

loadApplications();

loadProfile();

},[]);



/* ------------------
LOAD APPLICATIONS
------------------- */

const loadApplications=
async()=>{

try{

const res=
await API.get(
"/my-applications/"
);

const data=
res.data || [];

setJobs(
data
);

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

catch(err){

console.log(
err.response?.data
);

}

};



/* ------------------
LOAD PROFILE
------------------- */

const loadProfile=
async()=>{

try{

const res=
await API.get(
"/profile/"
);

setProfile(

res.data

);

}

catch(err){

console.log(
err.response?.data
);

}

};



/* ------------------
PROFILE %
------------------- */

const calculateProfileProgress=
()=>{

const fields=[

profile.phone,

profile.linkedin,

profile.experience,

profile.resume

];

const filled=
fields.filter(

f=>

f!==null &&
f!==undefined &&
f!==""

).length;

return Math.round(

(filled/fields.length)

*100

);

};


const profileProgress=
calculateProfileProgress();



/* ------------------
APPLICATION %
------------------- */

const applicationProgress=

stats.total===0

?

0

:

Math.round(

(

stats.applied+

stats.interview

)

/

stats.total

*

100

);



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
navigate(
"/jobs"
)
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

Profile

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

<h2>

{stats.total}

</h2>

<p>

Total Applications

</p>

</div>


<div className="card">

<h2>

{stats.applied}

</h2>

<p>

Applied

</p>

</div>


<div className="card">

<h2>

{stats.interview}

</h2>

<p>

Interviews

</p>

</div>


<div className="card">

<h2>

{stats.rejected}

</h2>

<p>

Rejected

</p>

</div>


</div>



{/* APPLICATION PROGRESS */}

<div className="analytics">

<h2>

Application Progress

</h2>


<div className="progress">

<div

style={{
width:
`${applicationProgress}%`
}}

></div>

</div>


<p>

{applicationProgress}% Progress

</p>

</div>




{/* RECENT APPLICATIONS */}

<div className="jobs">

<h2>

Recent Applications

</h2>


{

jobs.length===0

?

<p>

No applications yet

</p>

:

jobs.slice(
0,
5
).map(

(job)=>(

<div
key={job.id}
className="job"
>

<div>

<h3>

{

job.job?.title ||

job.job_title ||

"Untitled Job"

}

</h3>


<p>

{

job.job?.company ||

job.company ||

"Unknown Company"

}

</p>

</div>


<span>

{

job.status==="pending"

?

"Applied"

:

job.status

}

</span>

</div>

)

)

}

</div>




{/* PROFILE PROGRESS */}

<div className="profile">

<h2>

Profile Completion

</h2>


<div className="progress">

<div

style={{
width:
`${profileProgress}%`
}}

></div>

</div>


<p>

{profileProgress}% Completed

</p>


<button

className="profile-btn"

onClick={()=>

navigate(
"/profile"
)

}

>

{

profileProgress===100

?

"Edit Profile"

:

"Complete Profile"

}

</button>


</div>



</div>

</div>

);

}

export default Dashboard;