// ContactUs.js
import { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for contacting us! We'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    
    <div>
      <Navbar></Navbar>
      <div className="min-h-screen bg-base-200 p-6">
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Info Section */}
        <div className="space-y-4 mt-36">
          <h2 className="text-4xl font-bold">Contact Us</h2>
          <p className="text-lg">We’d love to hear from you!</p>
          <div className="space-y-2 text-base">
            <p>📞 Phone: +1 234 567 890</p>
            <p>📧 Email: contact@yourwebsite.com</p>
            <p>🏢 Address: 123 Main Street, Your City, Your Country</p>
          </div>
        </div>

        {/* Form Section */}
        <div className="bg-whiteshadow-xl rounded-lg p-6">
          <h3 className="text-2xl font-semibold mb-4">Or, use the form below:</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="input input-bordered w-full"
                placeholder="Enter your name"
                required
              />
            </div>

            {/* Email */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="input input-bordered w-full"
                placeholder="Enter your email"
                required
              />
            </div>

            {/* Message */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Message</span>
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="textarea textarea-bordered w-full"
                placeholder="Write your message"
                rows="4"
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="form-control mt-4">
              <button type="submit" className="btn bg-blue-400 text-white font-bold w-full">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <Footer></Footer>
    </div>
  );
};

export default ContactUs;
