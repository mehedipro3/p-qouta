import Footer from "./Footer";
import Navbar from "./Navbar";

const AboutUs = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="p-5 bg-gray-100">
      <h1 className="text-4xl font-bold text-center mb-6">About Us</h1>
      <p className="text-lg text-gray-700 mb-4">
        Welcome to our organization. We are dedicated to delivering exceptional services and products
        that make a positive impact in the lives of our customers and the communities we serve.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-4 bg-white rounded shadow">
          <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
          <p>
            To empower individuals and businesses by providing innovative solutions and unparalleled support,
            ensuring a brighter future for everyone.
          </p>
        </div>
        <div className="p-4 bg-white rounded shadow">
          <h2 className="text-2xl font-semibold mb-2">Our Vision</h2>
          <p>
            To be a global leader in our industry, recognized for our commitment to excellence,
            sustainability, and social responsibility.
          </p>
        </div>
      </div>
      <div className="mt-6 p-4 bg-white rounded shadow">
        <h2 className="text-2xl font-semibold mb-4">Meet Our Team</h2>
        <p>
          Our team is comprised of highly skilled professionals with a shared passion for innovation
          and success. Together, we strive to exceed expectations and achieve remarkable results.
        </p>
      </div>
    </div>
    <Footer></Footer>
    </div>
  );
};

export default AboutUs;
