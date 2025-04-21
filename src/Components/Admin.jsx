import { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Footer from './Footer';
import Navbar from './Navbar';
import Swal from 'sweetalert2';
import axios from 'axios';

const Admin = () => {
  const datas = useLoaderData();
  const [users, setUsers] = useState(datas);
  const [searchQuery, setSearchQuery] = useState("");

 // handleDelete function will delete the user from the db
 const handleDelete = async (id) => {
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!"
  }).then((result) => {
    if (result.isConfirmed) {
      try {
        axios.delete(`http://localhost:5000/datas/${id}`);
        setUsers(users.filter((user) => user._id !== id));
      } catch (error) {
        console.error("Error deleting user:", error);
      }

      Swal.fire({
        title: "Deleted!",
        text: "Your file has been deleted.",
        icon: "success"
      });
    }
  });
};

  // Filter users based on search query
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <Navbar></Navbar>
      <div className="p-5">
      <div className="flex justify-between items-center mb-4">
        <input
          type="text"
          placeholder="Search by name"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)} // Update search query
          className="input input-bordered w-full max-w-xs"
        />
        <Link to={'/addData'}>
          <button className="btn btn-primary ml-4">New User</button>
        </Link>
      </div>

      <table className="table w-full">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Contact</th>
            <th>Blood Group</th>
            <th>Occupation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((user, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{user.name}</td>
              <td>+{user.contact_details}</td>
              <td>{user.blood_group}</td>
              <td>{user.occupation}</td>
              <td>
                <Link to={`/updateData/${user._id}`}>
                <button className="btn btn-info btn-sm mr-2">Edit</button>
                </Link>
                <button
                  className="btn btn-error btn-sm"
                  onClick={() => handleDelete(user.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <Footer></Footer>
    </div>
  );
};

export default Admin;
