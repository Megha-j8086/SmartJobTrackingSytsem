import React, { useEffect, useState } from "react";
import API from "../../api/api";
import "../../styles/AdminTable.css";

function AdminManageJobs() {

  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadJobs();
  }, []);

  // =========================
  // LOAD JOBS
  // =========================
  const loadJobs = async () => {
    try {
      const res = await API.get("/admin/jobs/");
      setJobs(res.data);
    } catch (err) {
      console.log(err.response?.data);
    } finally {
      setLoading(false);
    }
  };

  // =========================
  // DELETE JOB
  // =========================
  const deleteJob = async (id) => {
    try {
      await API.delete(`/admin/jobs/delete/${id}/`);
      setJobs(prev => prev.filter(job => job.id !== id));
    } catch (err) {
      console.log(err.response?.data);
    }
  };

  return (
    <div className="table-page">

      <h1>Manage Jobs</h1>

      {loading ? (
        <p>Loading jobs...</p>
      ) : (
        <table>

          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Company</th>
              <th>Recruiter</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>

            {jobs.length === 0 ? (
              <tr>
                <td colSpan="5">No Jobs Found</td>
              </tr>
            ) : (
              jobs.map(job => (
                <tr key={job.id}>

                  <td>{job.id}</td>
                  <td>{job.title}</td>
                  <td>{job.company}</td>

                  <td>
                    {job.recruiter__username || "Unknown"}
                  </td>

                  <td>
                    <button
                      className="delete"
                      onClick={() => deleteJob(job.id)}
                    >
                      Delete
                    </button>
                  </td>

                </tr>
              ))
            )}

          </tbody>

        </table>
      )}

    </div>
  );
}

export default AdminManageJobs;