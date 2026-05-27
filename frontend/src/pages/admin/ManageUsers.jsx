import React, { useEffect, useState } from "react";
import API from "../../api/api";
import "../../styles/AdminTable.css";

function ManageUsers() {

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    try {
      const res = await API.get("/admin/users/");
      setUsers(res.data);
    } catch (err) {
      console.log(err.response?.data);
    } finally {
      setLoading(false);
    }
  };

  const deleteUser = async (id) => {
    try {
      await API.delete(`/admin/users/delete/${id}/`);
      alert("User deleted");
      loadUsers();
    } catch (err) {
      console.log(err.response?.data);
    }
  };

  return (
    <div className="table-page">

      <h1>Manage Users</h1>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <table>

          <thead>
            <tr>
              <th>ID</th>
              <th>Username</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {users.map(user => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>
                  <button
                    className="delete"
                    onClick={() => deleteUser(user.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      )}

    </div>
  );
}

export default ManageUsers;