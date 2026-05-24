import "../../styles/Applications.css";

const applications=[

{
id:1,
job:"Frontend Developer",
company:"Google",
status:"Applied"
},

{
id:2,
job:"Python Developer",
company:"Microsoft",
status:"Interview"
},

{
id:3,
job:"Backend Developer",
company:"Amazon",
status:"Rejected"
},

{
id:4,
job:"React Developer",
company:"Meta",
status:"Selected"
}

];

function Applications(){

const getClass=(status)=>{

if(status==="Applied")
return "applied";

if(status==="Interview")
return "interview";

if(status==="Rejected")
return "rejected";

return "selected";

};

return(

<div className="apps">

<h1>

My Applications

</h1>

<p>

Track your job progress

</p>

<div className="table">

<div className="head">

<span>Job</span>

<span>Company</span>

<span>Status</span>

</div>

{

applications.map(

(app)=>(

<div
key={app.id}
className="row"
>

<span>

{app.job}

</span>

<span>

{app.company}

</span>

<span
className={
getClass(
app.status
)
}
>

{app.status}

</span>

</div>

)

)

}

</div>

</div>

)

}

export default Applications