import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../../api/api";

import "../../styles/AdminTable.css";

function RecruiterDetails() {

  const { id } = useParams();

  const [jobs, setJobs] = useState([]);
  const [apps, setApps] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const jobsRes = await API.get("/jobs/");
      const appsRes = await API.get("/applicants/");

      // FILTER BY RECRUITER
      const recruiterJobs = jobsRes.data.filter(
        job => job.recruiter === parseInt(id)
      );

      const recruiterApps = appsRes.data.filter(
  app => app.recruiter_id === Number(id)
);

      setJobs(recruiterJobs);
      setApps(recruiterApps);

    } catch (err) {
      console.log(err.response?.data);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="table-page">

      <h1>Recruiter Overview</h1>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {/* JOBS TABLE */}
          <h2>Posted Jobs</h2>

          <table>
            <thead>
              <tr>
                <th>Job Title</th>
                <th>Company</th>
              </tr>
            </thead>

            <tbody>
              {jobs.map(job => (
                <tr key={job.id}>
                  <td>{job.title}</td>
                  <td>{job.company}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* APPLICATIONS TABLE */}
          <h2 style={{ marginTop: "30px" }}>
            Applications
          </h2>

          <table>
            <thead>
              <tr>
                <th>User</th>
                <th>Job</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {apps.map(app => (
                <tr key={app.id}>
                  <td>{app.name}</td>
                  <td>{app.job}</td>
                  <td>{app.status}</td>
                </tr>
              ))}
            </tbody>
          </table>

        </>
      )}

    </div>
  );
}

export default RecruiterDetails;