import React,{
useEffect,
useState
} from "react";

import API from "../../api/api";

import "../../styles/ManageJobs.css";

function ManageJobs(){

const[
jobs,
setJobs
]=useState([]);

const[
editing,
setEditing
]=useState(null);

const[
title,
setTitle
]=useState("");



useEffect(()=>{

loadJobs();

},[]);



const loadJobs=
async()=>{

const res=

await API.get(
"/my-jobs/"
);

setJobs(
res.data
);

};



const remove=
async(id)=>{

await API.delete(

`/delete-job/${id}/`

);

loadJobs();

};



const edit=
(job)=>{

setEditing(
job.id
);

setTitle(
job.title
);

};



const update=
async(id)=>{

await API.put(

`/update-job/${id}/`,

{

title

}

);

setEditing(
null
);

loadJobs();

};



return(

<div className="manage">

<h1>

Manage Jobs

</h1>


{

jobs.map(

(job)=>(

<div
key={job.id}
className="job"
>

{

editing===job.id

?

<input

value={title}

onChange={
e=>

setTitle(
e.target.value
)

}

/>

:

<h2>

{job.title}

</h2>

}



<div>

{

editing===job.id

?

<button
onClick={()=>
update(
job.id
)
}
>

Save

</button>

:

<button
onClick={()=>
edit(
job
)
}
>

Edit

</button>

}



<button

className="delete"

onClick={()=>
remove(
job.id
)
}

>

Delete

</button>

</div>

</div>

)

)

}

</div>

);

}

export default ManageJobs;