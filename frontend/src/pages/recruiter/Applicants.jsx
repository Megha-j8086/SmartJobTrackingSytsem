import "../../styles/Applicants.css";

const data=[

{
name:"Alex",
role:"Frontend",
resume:"resume.pdf"
},

{
name:"John",
role:"Python",
resume:"resume.pdf"
}

];

function Applicants(){

return(

<div className="apps">

<h1>

Applicants

</h1>

{

data.map(

(user,index)=>(

<div
key={index}
className="candidate"
>

<h2>

{user.name}

</h2>

<p>

{user.role}

</p>

<button>

Download Resume

</button>

<button>

Schedule Interview

</button>

<button>

Reject

</button>

</div>

)

)

}

</div>

)

}

export default Applicants