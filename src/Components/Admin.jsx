import { useState } from "react";
import axios from "axios"; // Ensure axios is installed with `npm install axios`
import Navbar from "./Navbar";
import Footer from "./Footer";

const Admin = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "Prathmesh Asole", contact: "01952100030", bloodGroup: "A+", occupation: "Doctor" },
    { id: 2, name: "Atharv Asole", contact: "01952100031", bloodGroup: "O+", occupation: "Engineer" },
  ]);
  const [searchTerm, setSearchTerm] = useState("");
  const [editUser, setEditUser] = useState(null); // Holds the user being edited
  const [formData, setFormData] = useState({ name: "", contact: "", bloodGroup: "", occupation: "" });

  // Filter users based on the search term
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleEditClick = (user) => {
    setEditUser(user);
    setFormData(user); // Pre-fill form with user details
  };

  const handleDelete = (id) => {
    setUsers(users.filter((user) => user.id !== id));
    // Optional: Send DELETE request to the backend
    axios.delete(`/api/users/${id}`).then(() => console.log("User deleted"));
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Update user in the backend
    axios
      .put(`/api/users/${editUser.id}`, formData)
      .then((response) => {
        // Update user in the frontend state
        setUsers(users.map((user) => (user.id === editUser.id ? response.data : user)));
        setEditUser(null); // Close modal
      })
      .catch((error) => console.error("Error updating user:", error));
  };

  return (
    <div>
      <Navbar></Navbar>
      <div className="p-6 bg-gray-50 min-h-screen">
      <div className="flex justify-between items-center mb-4">
        <input
          type="text"
          placeholder="Search by name"
          className="px-4 py-2 border rounded-md shadow-sm focus:ring focus:ring-purple-300"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="px-4 py-2 bg-purple-600 text-white rounded-md shadow-md hover:bg-purple-700">
          New User
        </button>
      </div>
      <div className="overflow-x-auto bg-white shadow-md rounded-lg">
        <table className="w-full border-collapse">
          <thead className="bg-gray-100 border-b">
            <tr>
              <th className="px-4 py-2 text-left font-medium text-gray-600">ID</th>
              <th className="px-4 py-2 text-left font-medium text-gray-600">Name</th>
              <th className="px-4 py-2 text-left font-medium text-gray-600">Contact</th>
              <th className="px-4 py-2 text-left font-medium text-gray-600">Blood Group</th>
              <th className="px-4 py-2 text-left font-medium text-gray-600">Occupation</th>
              <th className="px-4 py-2 text-left font-medium text-gray-600">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.length > 0 ? (
              filteredUsers.map((user) => (
                <tr key={user.id} className="hover:bg-gray-50">
                  <td className="px-4 py-2 border-b">{user.id}</td>
                  <td className="px-4 py-2 border-b">{user.name}</td>
                  <td className="px-4 py-2 border-b">{user.contact}</td>
                  <td className="px-4 py-2 border-b">{user.bloodGroup}</td>
                  <td className="px-4 py-2 border-b">{user.occupation}</td>
                  <td className="px-4 py-2 border-b flex gap-2">
                    <button
                      onClick={() => handleEditClick(user)}
                      className="px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(user.id)}
                      className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="px-4 py-2 text-center text-gray-500">
                  No users found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Edit Modal */}
      {editUser && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded shadow-lg w-96">
            <h2 className="text-xl font-bold mb-4">Edit User</h2>
            <form onSubmit={handleFormSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-600">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleFormChange}
                  className="w-full px-4 py-2 border rounded-md"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-600">Contact</label>
                <input
                  type="text"
                  name="contact"
                  value={formData.contact}
                  onChange={handleFormChange}
                  className="w-full px-4 py-2 border rounded-md"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-600">Blood Group</label>
                <input
                  type="text"
                  name="bloodGroup"
                  value={formData.bloodGroup}
                  onChange={handleFormChange}
                  className="w-full px-4 py-2 border rounded-md"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-600">Occupation</label>
                <input
                  type="text"
                  name="occupation"
                  value={formData.occupation}
                  onChange={handleFormChange}
                  className="w-full px-4 py-2 border rounded-md"
                  required
                />
              </div>
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setEditUser(null)}
                  className="px-4 py-2 bg-gray-300 text-black rounded hover:bg-gray-400"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
    <Footer></Footer>
    </div>
  );
};

export default Admin;
