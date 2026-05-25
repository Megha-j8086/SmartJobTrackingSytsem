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
loading,
setLoading
]=useState(true);

const load=
async()=>{

try{

setLoading(
true
);

const res=
await API.get(
"/applicants/"
);

console.log(
"Applicants:",
res.data
);

setApps(
res.data
);

}

catch(error){

console.log(
error.response?.data
);

alert(
"Failed to load applicants"
);

}

finally{

setLoading(
false
);

}

};

useEffect(()=>{

load();

},[]);

const update=
async(
id,
status
)=>{

try{

await API.put(

`/status/${id}/`,

{

status

}

);

alert(
"Status Updated"
);

load();

}

catch(error){

alert(
"Update Failed"
);

}

};

return(

<div className="applicants">

<h1>

Applicants

</h1>

{

loading

?

<p>

Loading...

</p>

:

apps.length===0

?

<p>

No Applicants Yet

</p>

:

apps.map(

(app)=>(

<div
key={app.id}
className="card"
>

<h3>

{app.name}

</h3>

<p>

Job:
{app.job}

</p>

<p>

Status:
{app.status}

</p>

{

app.resume && (

<a
href={`http://127.0.0.1:8000${app.resume}`}
target="_blank"
rel="noreferrer"
>

View Resume

</a>

)

}

<div>

<button
onClick={()=>

update(
app.id,
"accepted"
)

}
>

Accept

</button>

<button
onClick={()=>

update(
app.id,
"rejected"
)

}
>

Reject

</button>

</div>

</div>

)

)

}

</div>

);

}

export default Applicants;