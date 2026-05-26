import React,{
useEffect,
useState
} from "react";

import {
useNavigate
} from "react-router-dom";

import API from "../../api/api";

import "../../styles/RecruiterDashboard.css";

function RecruiterDashboard(){

const navigate=
useNavigate();

const[
stats,
setStats
]=useState({

jobs:0,
applications:0,
interviews:0,
accepted:0,
rejected:0

});

const[
loading,
setLoading
]=useState(true);



useEffect(()=>{

loadDashboard();

},[]);



const loadDashboard=
async()=>{

try{

const res=
await API.get(
"/recruiter-stats/"
);

setStats(
res.data
);

}

catch(error){

console.log(
error.response?.data
);

}

finally{

setLoading(
false
);

}

};



return(

<div className="recruiter">


{/* SIDEBAR */}

<div className="left">

<h2>

Recruiter

</h2>

<ul>

<li>

📊 Dashboard

</li>

<li
onClick={()=>
navigate(
"/add-job"
)
}
>

Add Job

</li>

<li
onClick={()=>
navigate(
"/applicants"
)
}
>

Applicants

</li>
<li
onClick={()=>
navigate(
"/manage-jobs"
)
}
>

Manage Jobs

</li>

<li
onClick={()=>
navigate(
"/posted-jobs"
)
}
>

Posted Jobs

</li>

</ul>

</div>



{/* RIGHT */}

<div className="right">

<h1>

Recruiter Dashboard Overview

</h1>


{

loading

?

<p>

Loading Analytics...

</p>

:

<>

<div className="cards">


<div className="jobs">

<h2>

{stats.jobs}

</h2>

<p>

Jobs Posted

</p>

</div>


<div className="card apps">

<h2>

{stats.applications}

</h2>

<p>

Applications

</p>

</div>


<div className="interview">

<h2>

{stats.interviews}

</h2>

<p>

Interviews

</p>

</div>


<div className="accepted">

<h2>

{stats.accepted}

</h2>

<p>

Accepted

</p>

</div>


<div className="rejected">

<h2>

{stats.rejected}

</h2>

<p>

Rejected

</p>

</div>


</div>



<div className="actions">

<button
onClick={()=>
navigate(
"/add-job"
)
}
>

Post New Job

</button>


<button
onClick={()=>
navigate(
"/applicants"
)
}
>

View Applicants

</button>

</div>

</>

}

</div>

</div>

);

}

export default RecruiterDashboard;