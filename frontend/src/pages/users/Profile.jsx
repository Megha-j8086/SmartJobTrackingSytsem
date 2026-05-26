import React, {
useEffect,
useState
} from "react";

import API from "../../api/api";

import "../../styles/Profile.css";

function Profile(){

const[
profile,
setProfile
]=useState({

username:"",
email:"",
phone:"",
linkedin:"",
experience:"",
resume:null

});

useEffect(()=>{

loadProfile();

},[]);


/* LOAD PROFILE */
const loadProfile=
async()=>{

try{

const res=
await API.get(
"/profile/"
);

setProfile(
res.data
);

}

catch(err){

console.log(
err.response?.data
);

}

};


/* CHANGE INPUT */
const change=(e)=>{

const{
name,
value,
files
}=e.target;

setProfile({

...profile,

[name]:
files
? files[0]
: value

});

};


/* SAVE PROFILE */
const update=
async()=>{

try{

const form=
new FormData();

Object.keys(
profile
).forEach(

(key)=>{

if(
profile[key]
!==null
){

form.append(
key,
profile[key]
);

}

}

);

await API.put(

"/profile/",
form,

{

headers:{

"Content-Type":
"multipart/form-data"

}

}

);

alert(
"Profile Updated"
);

loadProfile();

}

catch(err){

console.log(
err.response?.data
);

alert(
"Update Failed"
);

}

};


/* PROGRESS */
const calculate=()=>{

const fields=[

"profile",

"profile",

"profile"

];

const values=[

profile.phone,

profile.linkedin,

profile.experience,

profile.resume

];

let filled=0;

values.forEach(

(v)=>{

if(v)
filled++;

}

);

return Math.round(

(filled/values.length)
*100

);

};

const progress=
calculate();


return(

<div className="profile-page">

<div className="profile-card">

<h1>

My Profile

</h1>

<div className="avatar">

{
profile.username
?.charAt(0)
|| "U"
}

</div>


<div className="progress-bar">

<div

style={{
width:
`${progress}%`
}}

></div>

</div>

<p>

{progress}% Completed

</p>


<input

name="username"

value={
profile.username
}

disabled

/>


<input

name="email"

value={
profile.email
}

disabled

/>


<input

name="phone"

value={
profile.phone
|| ""
}

onChange={
change
}

placeholder="Phone"

/>


<input

name="linkedin"

value={
profile.linkedin
|| ""
}

onChange={
change
}

placeholder="LinkedIn"

/>


<input

type="number"

name="experience"

value={
profile.experience
|| ""
}

onChange={
change
}

placeholder="Experience"

/>


<label>

Upload Resume

</label>

<input

type="file"

name="resume"

onChange={
change
}

/>


<button
onClick={
update
}
>

Update Profile

</button>

</div>

</div>

);

}

export default Profile;