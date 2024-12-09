import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

// eslint-disable-next-line react/prop-types
const UpdateProfile = () => {
  const {updateUserProfile} = useContext(AuthContext);
  const navigate = useNavigate();
    const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    
      
    updateUserProfile({displayName:name,photoURL:photo})
        .then(()=>{
          navigate("/");
        })
        .catch((error)=>{
          console.log(error);
        })
  }
  return (
    <div className="font-poppins">
      <Navbar></Navbar>
      <div className="min-h-screen flex justify-center items-center">
        <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none p-10">
          <h2 className="text-4xl font-semibold text-center">Update Your Profile</h2>
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input name="name" type="text" placeholder="Name" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input name="photo" type="text" placeholder="Photo url" className="input input-bordered" required />
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-blue-400 text-white">Update</button>
            </div>
          </form>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default UpdateProfile;