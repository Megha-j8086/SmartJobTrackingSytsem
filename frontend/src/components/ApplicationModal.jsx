import React,{
useState
} from "react";

import API from "../api/api";

import "../styles/ApplicationModal.css";

function ApplicationModal({

job,
submit

}){

const[
form,
setForm
]=useState({

name:"",
email:"",
phone:"",
experience:"",
skills:"",
linkedin:"",
projects:"",
resume:null

});

const change=(e)=>{

const{

name,
value,
files

}=e.target;

setForm({

...form,

[name]:

files
? files[0]
: value

});

};

const handleSubmit=
async()=>{

if(

!form.name ||

!form.email ||

!form.phone ||

!form.resume

){

alert(
"Please fill required fields"
);

return;

}

try{

const data=
new FormData();

data.append(
"job",
job.id
);

data.append(
"resume",
form.resume
);

data.append(

"experience",

form.experience
? parseInt(
form.experience
)
: 0

);

data.append(
"skills",
form.skills
);

data.append(
"linkedin",
form.linkedin
);

data.append(
"projects",
form.projects
);

const res=

await API.post(

"/apply/",

data,

{

headers:{

"Content-Type":

"multipart/form-data"

}

}

);

console.log(
res.data
);

alert(
"Application Submitted"
);

submit(
null
);

}

catch(error){

console.log(
error.response?.data
);

alert(

JSON.stringify(
error.response?.data
)

);

}

};

return(

<div className="modal">

<div className="modal-box">

<h2>

Apply — {job.title}

</h2>

<input
name="name"
placeholder="Full Name"
onChange={change}
/>

<input
type="email"
name="email"
placeholder="Email"
onChange={change}
/>

<input
type="tel"
name="phone"
placeholder="Phone Number"
onChange={change}
/>

<input
type="number"
name="experience"
placeholder="Experience (Years)"
min="0"
onChange={change}
/>

<input
name="skills"
placeholder="Skills"
onChange={change}
/>

<input
name="linkedin"
placeholder="LinkedIn URL"
onChange={change}
/>

<textarea
name="projects"
placeholder="Projects"
rows="4"
onChange={change}
/>

<div className="upload">

<label>

Upload Resume

</label>

<input
type="file"
name="resume"
accept=".pdf,.doc,.docx"
onChange={change}
/>

</div>

<div className="buttons">

<button
className="cancel"
onClick={()=>
submit(null)
}
>

Cancel

</button>

<button
className="submit"
onClick={handleSubmit}
>

Submit Application

</button>

</div>

</div>

</div>

);

}

export default ApplicationModal;