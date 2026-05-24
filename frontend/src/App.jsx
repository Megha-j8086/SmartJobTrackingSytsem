import React from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/users/Home";
import About from "./pages/users/About";
import Features from "./components/Features";
import TrackJobs from "./pages/users/TrackJobs";

import Login from "./pages/users/Login";
import Register from "./pages/users/Register";
import Dashboard from "./pages/users/Dashboard";

import RecruiterDashboard from "./pages/recruiter/RecruiterDashboard";

import AdminDashboard from "./pages/admin/AdminDashboard";
import JobListings from "./pages/users/JobListings";
import Applications from "./pages/users/Applications";
import Profile from "./pages/users/Profile";
import AddJob from "./pages/recruiter/AddJob";

import Applicants from "./pages/recruiter/Applicants";

import ManageUsers from "./pages/admin/ManageUsers";

import ManageRecruiters from "./pages/admin/ManageRecruiters";

import ManageApplications from "./pages/admin/ManageApplications";

import Analytics from "./pages/admin/Analytics";
import {
BrowserRouter,
Routes,
Route
} from "react-router-dom";

function App(){

return(

<BrowserRouter>

<Navbar/>

<Routes>

<Route
path="/"
element={<Home/>}
/>

<Route
path="/about"
element={<About/>}
/>

<Route
path="/features"
element={<Features/>}
/>

<Route
path="/track"
element={<TrackJobs/>}
/>
<Route
path="/login"
element={<Login/>}
/>

<Route
path="/register"
element={<Register/>}
/>
<Route
path="/dashboard"
element={<Dashboard/>}
/>

<Route
path="/recruiter"
element={<RecruiterDashboard/>}
/>

<Route
path="/admin"
element={<AdminDashboard/>}
/>

<Route
path="/jobs"
element={<JobListings/>}
/>

<Route
path="/applications"
element={<Applications/>}
/>

<Route
path="/profile"
element={<Profile/>}
/>


<Route
path="/add-job"
element={<AddJob/>}
/>

<Route
path="/applicants"
element={<Applicants/>}
/>


<Route
path="/manage-users"
element={<ManageUsers/>}
/>

<Route
path="/manage-recruiters"
element={<ManageRecruiters/>}
/>

<Route
path="/manage-applications"
element={<ManageApplications/>}
/>

<Route
path="/analytics"
element={<Analytics/>}
/>
</Routes>

<Footer/>

</BrowserRouter>

)

}

export default App