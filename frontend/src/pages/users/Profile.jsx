import React,{
useState
} from "react";

import "../../styles/Profile.css";

function Profile(){

const[
profile,
setProfile
]=useState({

name:"John Doe",

email:"john@gmail.com",

phone:"9876543210",

skills:"React, Django",

experience:"2 Years",

linkedin:"linkedin.com/in/john",

bio:"Frontend and Python Developer",

resume:null

});

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

})

};

const update=()=>{

alert(
"Profile Updated Successfully"
);

};

return(

<div className="profile-page">

<div className="profile-card">

<h1>

My Profile

</h1>

<div className="avatar">

👤

</div>

<input
name="name"
value={profile.name}
onChange={change}
/>

<input
name="email"
value={profile.email}
onChange={change}
/>

<input
name="phone"
value={profile.phone}
onChange={change}
/>

<input
name="skills"
value={profile.skills}
onChange={change}
/>

<input
name="experience"
value={profile.experience}
onChange={change}
/>

<input
name="linkedin"
value={profile.linkedin}
onChange={change}
/>

<textarea
name="bio"
rows="4"
value={profile.bio}
onChange={change}
/>

<label>

Upload Resume

</label>

<input
type="file"
name="resume"
onChange={change}
/>

<button
onClick={update}
>

Update Profile

</button>

</div>

</div>

)

}

export default Profile