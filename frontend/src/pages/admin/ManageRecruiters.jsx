import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../../api/api";

import "../../styles/ManageRecruiters.css";

function ManageRecruiters() {

  const navigate = useNavigate();

  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [edit, setEdit] = useState(null);
  const [loading, setLoading] = useState(true);

  // =========================
  // LOAD REAL RECRUITERS
  // =========================
  useEffect(() => {
    loadRecruiters();
  }, []);

  const loadRecruiters = async () => {
    try {
      const res = await API.get("/admin/users/");

      // ONLY RECRUITERS FROM BACKEND
      const recruiters = res.data.filter(
        user => user.role === "recruiter"
      );

      setData(recruiters);

    } catch (err) {
      console.log(err.response?.data);
    } finally {
      setLoading(false);
    }
  };

  // =========================
  // DELETE (REAL API)
  // =========================
  const del = async (id) => {
    try {
      await API.delete(`/admin/users/delete/${id}/`);
      setData(prev => prev.filter(item => item.id !== id));
    } catch (err) {
      console.log(err.response?.data);
    }
  };

  // =========================
  // EDIT (OPTIONAL: LOCAL ONLY)
  // =========================
  const startEdit = (item) => {
    setEdit(item.id);
    setName(item.username);
  };

  // NOTE: recruiters usually should NOT be edited like this unless backend supports it

  const save = () => {
    alert("Use backend API for recruiter creation/update");
    setName("");
    setEdit(null);
  };

  return (
    <div className="manage">

      <button
        className="back"
        onClick={() => navigate("/admin")}
      >
        ← Back To Dashboard
      </button>

      <h1>Manage Recruiters</h1>

      {/* LOADING */}
      {loading ? (
        <p>Loading recruiters...</p>
      ) : (
        <>
          {/* INPUT AREA (disabled conceptually for now) */}
          <div className="top">

            <input
              value={name}
              placeholder="Recruiter name (read-only mode)"
              onChange={(e) => setName(e.target.value)}
            />

            <button onClick={save}>
              Update (Backend Needed)
            </button>

          </div>

          {/* LIST */}
          {data.length === 0 ? (
            <p>No recruiters found</p>
          ) : (
            data.map((item) => (
              <div key={item.id} className="box">

                <h3>{item.username}</h3>

                <div>
                  <button onClick={() => navigate(`/admin/recruiters/${item.id}`)}>
                    View
                    </button>

                  <button onClick={() => del(item.id)}>
                    Delete
                  </button>
                </div>

              </div>
            ))
          )}
        </>
      )}

    </div>
  );
}

export default ManageRecruiters;