import React, { useEffect, useState } from "react";
import API from "../../api/api";
import "../../styles/Interviews.css";

function Interviews() {

const [interviews, setInterviews] = useState([]);

useEffect(() => {
loadInterviews();
}, []);

const loadInterviews = async () => {
try {
const res = await API.get("/interviews/");
setInterviews(res.data);
} catch (err) {
console.log(err.response?.data);
}
};

return (
<div className="interviews-page">

<h1>Scheduled Interviews</h1>

<table>

<thead>
<tr>
<th>Candidate</th>
<th>Job</th>
<th>Company</th>
<th>Date</th>
<th>Time</th>
<th>Link</th>
<th>Status</th>
</tr>
</thead>

<tbody>

{interviews.length === 0 ? (
<tr>
<td colSpan="7">No Interviews Scheduled</td>
</tr>
) : (
interviews.map((item) => (
<tr key={item.id}>

<td>{item.username}</td>
<td>{item.job}</td>
<td>{item.company}</td>
<td>{item.date || "Not Set"}</td>
<td>{item.time || "Not Set"}</td>

<td>
{item.link ? (
<a href={item.link} target="_blank" rel="noreferrer">
Join
</a>
) : (
"-"
)}
</td>

<td>{item.status}</td>

</tr>
))
)}

</tbody>

</table>

</div>
);
}

export default Interviews;