import React from "react";

import {
BrowserRouter,
Routes,
Route
} from "react-router-dom";

/* ROUTE GUARD */
import PrivateRoute from "./routes/PrivateRoute";

/* COMMON COMPONENTS */
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

/* PUBLIC PAGES */
import Home from "./pages/users/Home";
import About from "./pages/users/About";
import Features from "./components/Features";
import TrackJobs from "./pages/users/TrackJobs";

import Login from "./pages/users/Login";
import Register from "./pages/users/Register";

/* USER PAGES */
import Dashboard from "./pages/users/Dashboard";
import JobListings from "./pages/users/JobListings";
import Applications from "./pages/users/Applications";
import Profile from "./pages/users/Profile";

/* RECRUITER PAGES */
import RecruiterDashboard from "./pages/recruiter/RecruiterDashboard";
import AddJob from "./pages/recruiter/AddJob";
import Applicants from "./pages/recruiter/Applicants";

/* ADMIN PAGES */
import AdminDashboard from "./pages/admin/AdminDashboard";
import ManageUsers from "./pages/admin/ManageUsers";
import ManageRecruiters from "./pages/admin/ManageRecruiters";
import ManageApplications from "./pages/admin/ManageApplications";
import Analytics from "./pages/admin/Analytics";
import PostedJobs from "./pages/recruiter/PostedJobs";
import ManageJobs from "./pages/recruiter/ManageJobs";

function App(){

return(

<BrowserRouter>

<Navbar/>

<Routes>

{/* PUBLIC ROUTES */}
<Route path="/" element={<Home/>}/>
<Route path="/about" element={<About/>}/>
<Route path="/features" element={<Features/>}/>
<Route path="/track" element={<TrackJobs/>}/>
<Route path="/login" element={<Login/>}/>
<Route path="/register" element={<Register/>}/>

{/* USER PROTECTED ROUTES */}
<Route
path="/dashboard"
element={
<PrivateRoute allowedRole="user">
<Dashboard/>
</PrivateRoute>
}
/>

<Route
path="/jobs"
element={
<PrivateRoute allowedRole="user">
<JobListings/>
</PrivateRoute>
}
/>

<Route
path="/applications"
element={
<PrivateRoute allowedRole="user">
<Applications/>
</PrivateRoute>
}
/>

<Route
path="/profile"
element={
<PrivateRoute allowedRole="user">
<Profile/>
</PrivateRoute>
}
/>

{/* RECRUITER PROTECTED ROUTES */}
<Route
path="/recruiter"
element={
<PrivateRoute allowedRole="recruiter">
<RecruiterDashboard/>
</PrivateRoute>
}
/>

<Route
path="/add-job"
element={
<PrivateRoute allowedRole="recruiter">
<AddJob/>
</PrivateRoute>
}
/>

<Route
path="/applicants"
element={
<PrivateRoute allowedRole="recruiter">
<Applicants/>
</PrivateRoute>
}
/>


{/* ADMIN PROTECTED ROUTES */}
<Route
path="/admin"
element={
<PrivateRoute allowedRole="admin">
<AdminDashboard/>
</PrivateRoute>
}
/>

<Route
path="/manage-users"
element={
<PrivateRoute allowedRole="admin">
<ManageUsers/>
</PrivateRoute>
}
/>

<Route
path="/manage-recruiters"
element={
<PrivateRoute allowedRole="admin">
<ManageRecruiters/>
</PrivateRoute>
}
/>

<Route
path="/manage-applications"
element={
<PrivateRoute allowedRole="admin">
<ManageApplications/>
</PrivateRoute>
}
/>

<Route
path="/analytics"
element={
<PrivateRoute allowedRole="admin">
<Analytics/>
</PrivateRoute>
}
/>
<Route
path="/posted-jobs"
element={
<PrivateRoute allowedRole="recruiter">
<PostedJobs/>
</PrivateRoute>
}
/>

<Route
path="/manage-jobs"
element={
<PrivateRoute allowedRole="recruiter">
<ManageJobs/>
</PrivateRoute>
}
/>

</Routes>

<Footer/>

</BrowserRouter>

);

}

export default App;