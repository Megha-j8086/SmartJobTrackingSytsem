import React,{
useEffect,
useState
} from "react";

import API from "../../api/api";

import "../../styles/Applicants.css";

function Applicants(){

const[
apps,
setApps
]=useState([]);

const[
selected,
setSelected
]=useState(null);

const[
form,
setForm
]=useState({

interview_date:"",
interview_time:"",
interview_link:""

});


useEffect(()=>{

loadApplicants();

},[]);



const loadApplicants=
async()=>{

try{

const res=
await API.get(
"/applicants/"
);

setApps(
res.data
);

}

catch(err){

console.log(
err.response?.data
);

}

};



const schedule=
async()=>{

try{

await API.put(

`/schedule-interview/${selected.id}/`,

form

);

alert(
"Interview Scheduled"
);

setSelected(
null);

loadApplicants();

}

catch(err){

console.log(
err.response?.data
);

}

};



return(

<div className="applicants">

<h1>

Applicants

</h1>



<div className="table">

{

apps.map(

(app)=>(

<div
key={app.id}
className="row"
>

<div>

<h3>

{app.name}

</h3>

<p>

{app.job}

</p>

</div>



<div>

<span>

{app.status}

</span>



{

app.resume && (

<a
href={`http://127.0.0.1:8000${app.resume}`}
target="_blank"
rel="noreferrer"
className="resume-btn"
>
View Resume
</a>
)

}

</div>



<button

onClick={()=>

setSelected(
app
)

}

>

Schedule Interview

</button>

</div>

)

)

}

</div>



{

selected && (

<div className="modal">

<div className="box">

<h2>

Schedule Interview

</h2>



<input

type="date"

onChange={
e=>

setForm({

...form,

interview_date:
e.target.value

})

}

/>



<input

type="time"

onChange={
e=>

setForm({

...form,

interview_time:
e.target.value

})

}

/>



<input

placeholder="Meet Link"

onChange={
e=>

setForm({

...form,

interview_link:
e.target.value

})

}

/>



<button
onClick={schedule}
>

Schedule

</button>



<button

onClick={()=>

setSelected(
null
)

}

>

Cancel

</button>

</div>

</div>

)

}

</div>

);

}

export default Applicants;