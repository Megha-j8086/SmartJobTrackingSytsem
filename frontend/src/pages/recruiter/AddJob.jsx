import React,{
useState
} from "react";

import {
useNavigate
} from "react-router-dom";

import API from "../../api/api";

import "../../styles/AddJob.css";

function AddJob(){

const navigate=
useNavigate();

const[
form,
setForm
]=useState({

title:"",
company:"",
location:"",
experience:"",
description:"",
deadline:""

});

const change=(e)=>{

setForm({

...form,

[e.target.name]:
e.target.value

});

};

const add=
async()=>{
const add=async()=>{

console.log(
localStorage.getItem(
"access"
)
);

try{

await API.post(
"/jobs/",
form
);

alert(
"Job Added Successfully"
);

navigate(
"/recruiter"
);

}

catch(error){

console.log(
error.response?.data
);

}

};

try{

await API.post(

"/jobs/",

form

);

alert(
"Job Added Successfully"
);

navigate(
"/recruiter"
);

}

catch(error){

console.log(
error.response?.data
);

alert(
"Failed to Add Job"
);

}

};

return(

<div className="add-job">

<div className="job-box">

<h1>

Create New Job

</h1>

<input
name="title"
placeholder="Job Title"
onChange={change}
/>

<input
name="company"
placeholder="Company Name"
onChange={change}
/>

<input
name="location"
placeholder="Location"
onChange={change}
/>

<input
name="experience"
placeholder="Experience Required"
onChange={change}
/>

<textarea
name="description"
placeholder="Job Description"
rows="5"
onChange={change}
/>

<label>

Application Deadline

</label>

<input
type="date"
name="deadline"
onChange={change}
/>

<div className="buttons">

<button
type="button"
className="cancel"
onClick={()=>
navigate(
"/recruiter"
)
}
>

Cancel

</button>

<button
type="button"
className="submit"
onClick={add}
>

Publish Job

</button>

</div>

</div>

</div>

);

}

export default AddJob;