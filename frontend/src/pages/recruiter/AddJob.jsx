import React,{
useState
}
from "react";

import "../../styles/AddJob.css";

function AddJob(){

const[
job,
setJob
]=useState({

title:"",
company:"",
location:"",
deadline:""

});

const change=(e)=>{

setJob({

...job,

[e.target.name]:
e.target.value

})

};

const save=()=>{

alert(
"Job Added Successfully"
);

};

return(

<div className="add">

<h1>

Add New Job

</h1>

<input
name="title"
placeholder="Job Title"
onChange={change}
/>

<input
name="company"
placeholder="Company"
onChange={change}
/>

<input
name="location"
placeholder="Location"
onChange={change}
/>
<input
name="skills"
placeholder="Skills"
onChange={change}
/>

<input
name="experience"
placeholder="Experience"
onChange={change}
/>

<input
name="description"
placeholder="Description"
onChange={change}
/>

<input
type="date"
name="deadline"
onChange={change}
/>

<button
onClick={save}
>

Post Job

</button>

</div>

)

}

export default AddJob