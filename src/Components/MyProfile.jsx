import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";


const MyProfile = () => {
  const {user}=useContext(AuthContext);
  return (
    <div className="font-poppins">
    <Navbar></Navbar>
    <h2 className="text-5xl font-semibold text-blue-400 text-center py-6">Welcome......  {user?.displayName}</h2>
    <div className="max-w-lg mx-auto bg-gray-200  rounded-lg p-10 space-y-4 my-5">
      <div className="flex justify-center">
        <img className="w-40 h-40 rounded-full bg-cover" src={user?.photoURL} alt="" />
      </div>
      <div>
        <h2 className="text-2xl font-semibold ">Name : {user.displayName}</h2>
        <h2 className="text-2xl font-semibold ">Email : {user.email}</h2>
      </div>

      <div className="text-center mt-3">
      <Link to={"/updateProfile"} className="btn bg-blue-400 text-white">Update Profile</Link>
      </div>
    </div>
    <Footer></Footer>
  </div>
  );
};

export default MyProfile;