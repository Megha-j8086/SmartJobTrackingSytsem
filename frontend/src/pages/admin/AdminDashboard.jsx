import {
useNavigate
}
from "react-router-dom";

import "../../styles/AdminDashboard.css";

/* DUMMY DATA */

const users=[

{name:"Alex"},
{name:"John"},
{name:"Sara"},
{name:"Mike"}

];

const recruiters=[

{name:"Google"},
{name:"Amazon"},
{name:"Microsoft"}

];

const applications=[

{
status:"Applied"
},

{
status:"Interview"
},

{
status:"Rejected"
},

{
status:"Interview"
},

{
status:"Selected"
}

];

function AdminDashboard(){

const navigate=
useNavigate();

/* LIVE COUNTS */

const totalUsers=
users.length;

const totalRecruiters=
recruiters.length;

const totalApplications=
applications.length;

const totalInterviews=

applications.filter(

app=>

app.status===
"Interview"

).length;

return(

<div className="admin">

{/* SIDEBAR */}

<div className="sidebar">

<h2>

ADMIN

</h2>

<ul>

<li>

Dashboard

</li>

<li
onClick={()=>
navigate(
"/manage-users"
)
}
>

Manage Users

</li>

<li
onClick={()=>
navigate(
"/manage-recruiters"
)
}
>

Manage Recruiters

</li>

<li
onClick={()=>
navigate(
"/manage-applications"
)
}
>

Applications

</li>

<li
onClick={()=>
navigate(
"/analytics"
)
}
>

Analytics

</li>

</ul>

</div>

{/* CONTENT */}

<div className="content">

<h1>

Admin Dashboard

</h1>

<div className="cards">

<div className="card">

<h2>

{totalUsers}

</h2>

<p>

Total Users

</p>

</div>

<div className="card">

<h2>

{totalRecruiters}

</h2>

<p>

Recruiters

</p>

</div>

<div className="card">

<h2>

{totalApplications}

</h2>

<p>

Applications

</p>

</div>

<div className="card">

<h2>

{totalInterviews}

</h2>

<p>

Interviews

</p>

</div>

</div>

{/* RECENT */}

<div className="recent">

<h2>

Recent Activity

</h2>

<p>

✔ New user registered

</p>

<p>

✔ Recruiter added job

</p>

<p>

✔ Application submitted

</p>

</div>

</div>

</div>

)

}

export default AdminDashboard