import {
useNavigate
}
from "react-router-dom";

import "../../styles/RecruiterDashboard.css";

function RecruiterDashboard(){

const navigate=
useNavigate();

return(

<div className="recruiter">

<div className="left">

<h2>

Recruiter

</h2>

<ul>

<li>

Dashboard

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

</ul>

</div>

<div className="right">

<h1>

Recruiter Dashboard

</h1>

<div className="cards">

<div>

20

<p>

Jobs Posted

</p>

</div>

<div>

145

<p>

Applications

</p>

</div>

<div>

18

<p>

Interviews

</p>

</div>

</div>

</div>

</div>

)

}

export default RecruiterDashboard