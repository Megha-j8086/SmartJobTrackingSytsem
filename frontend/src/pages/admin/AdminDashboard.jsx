import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../../api/api";
import "../../styles/AdminDashboard.css";

function AdminDashboard() {

  const navigate = useNavigate();

  const [stats, setStats] = useState({
    users: 0,
    recruiters: 0,
    jobs: 0,
    applications: 0
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadStats();
  }, []);

  const loadStats = async () => {
    try {
      const res = await API.get("/admin/dashboard/");
      setStats(res.data);
    } catch (err) {
      console.log(err.response?.data);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="admin-layout">

      {/* SIDEBAR */}
      <div className="sidebar">

        <h2>Admin Panel</h2>

        <ul>

          <li onClick={() => navigate("/admin")}>
            📊 Dashboard
          </li>

          <li onClick={() => navigate("/manage-users")}>
             Manage Users
          </li>

          <li onClick={() => navigate("/manage-recruiters")}>
             Manage Recruiters
          </li>

          <li onClick={() => navigate("/admin-managejobs")}>
            Manage Jobs
          </li>

          <li onClick={() => navigate("/admin-interviews")}>
            Interviews
          </li>

        </ul>

      </div>

      {/* CONTENT */}
      <div className="admin-content">

        <h1>Admin Dashboard</h1>

        {loading ? (
          <p>Loading dashboard...</p>
        ) : (
          <div className="cards">

            <div className="card users">
              <h2>{stats.users}</h2>
              <p>Users</p>
            </div>

            <div className="card recruiters">
              <h2>{stats.recruiters}</h2>
              <p>Recruiters</p>
            </div>

            <div className="card jobs">
              <h2>{stats.jobs}</h2>
              <p>Jobs</p>
            </div>

            <div className="card apps">
              <h2>{stats.applications}</h2>
              <p>Applications</p>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}

export default AdminDashboard;