import React, { useEffect, useState } from "react";
import API from "../../api/api";
import "../../styles/AdminTable.css";

function AdminInterviews() {

  const [interviews, setInterviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadInterviews();
  }, []);

  const loadInterviews = async () => {
    try {
      const res = await API.get("/interviews/");
      setInterviews(res.data);
    } catch (err) {
      console.log(err.response?.data);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="table-page">

      <h1>Interview Schedule</h1>
      <p>All scheduled interviews from recruiters</p>

      {loading ? (
        <p>Loading interviews...</p>
      ) : (
        <table>

          <thead>
            <tr>
              <th>User</th>
              <th>Job Role</th>
              <th>Company</th>
              <th>Date</th>
              <th>Time</th>
              <th>Meeting Link</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>

            {interviews.length === 0 ? (
              <tr>
                <td colSpan="7">No Interview Scheduled Yet</td>
              </tr>
            ) : (
              interviews.map((item) => (
                <tr key={item.id}>

                  {/* USER */}
                  <td>
                    <strong>{item.username}</strong>
                  </td>

                  {/* JOB */}
                  <td>{item.job}</td>

                  {/* COMPANY */}
                  <td>{item.company}</td>

                  {/* DATE */}
                  <td>
                    {item.date ? (
                      <span>{item.date}</span>
                    ) : (
                      "Not Set"
                    )}
                  </td>

                  {/* TIME */}
                  <td>
                    {item.time ? (
                      <span>{item.time}</span>
                    ) : (
                      "Not Set"
                    )}
                  </td>

                  {/* LINK */}
                  <td>
                    {item.link ? (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noreferrer"
                        className="join-link"
                      >
                        Join Interview
                      </a>
                    ) : (
                      "-"
                    )}
                  </td>

                  {/* STATUS */}
                  <td>
                    <span
                      className={
                        item.status === "interview"
                          ? "badge interview"
                          : "badge"
                      }
                    >
                      {item.status}
                    </span>
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

export default AdminInterviews;