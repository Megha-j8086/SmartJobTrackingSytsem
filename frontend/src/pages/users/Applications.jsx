import React, { useEffect, useState } from "react";
import API from "../../api/api";
import "../../styles/Applications.css";

function Applications() {
  const [applications, setApplications] = useState([]);

  const [stats, setStats] = useState({
    total: 0,
    applied: 0,
    interview: 0,
    rejected: 0,
  });

  useEffect(() => {
    loadApplications();
  }, []);

  const loadApplications = async () => {
    try {
      const res = await API.get("/my-applications/");
      const data = res.data;

      setApplications(data);

      // 🔥 COUNT LOGIC
      const total = data.length;
      const applied = data.filter(a => a.status === "pending").length;
      const interview = data.filter(a => a.status === "review").length;
      const rejected = data.filter(a => a.status === "rejected").length;

      setStats({ total, applied, interview, rejected });

    } catch (error) {
      console.log(error.response?.data);
    }
  };

  const getClass = (status) => {
    if (status === "pending") return "applied";
    if (status === "review") return "interview";
    if (status === "rejected") return "rejected";
    return "selected";
  };

  return (
    <div className="apps">

      <h1>My Applications</h1>
      <p>Track your job progress</p>

      {/* 🔥 NEW: TOTAL APPLIED MESSAGE */}
      <div className="summary-box">
        You have already applied to <b>{stats.total}</b> jobs
      </div>

      {/* ANALYTICS */}
      <div className="analytics-cards">
        <div className="card">Total: {stats.total}</div>
        <div className="card">Applied: {stats.applied}</div>
        <div className="card">Interview: {stats.interview}</div>
        <div className="card">Rejected: {stats.rejected}</div>
      </div>

      {/* TABLE */}
      <div className="table">
        <div className="head">
          <span>Job</span>
          <span>Company</span>
          <span>Status</span>
        </div>

        {applications.length === 0 ? (
          <div className="empty">No Applications Found</div>
        ) : (
            applications.map((app) => (
            <div key={app.id} className="row">

                <span>
                {app.job_title || app.job?.title || app.job}
                </span>

                <span>
                {app.company || app.job?.company}
                </span>

                <span className={getClass(app.status)}>
                {app.status}
                </span>

            </div>
            ))
             
        )}
      </div>
    </div>
  );
}

export default Applications;