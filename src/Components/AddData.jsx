
import Footer from './Footer';
import Navbar from './Navbar';


const AddData = () => {
 // const navigate = useNavigate();



  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const medical_history = form.medical_history.value;
    const injury_date = form.injury_date.value;
    const age = form.age.value;
    const gender = form.gender.value;
    const contact_details = form.contact_details.value;
    const occupation = form.occupation.value;
    const blood_group = form.blood_group.value;
    const current_status = form.current_status.value;
    const treatment_type = form.treatment_type.value;
    const fund_amount_bdt = form.fund_amount_bdt.value;
    const fund_status = form.fund_status.value;
    const transaction_date = form.transaction_date.value;
    const receiver_amount_bdt = form.receiver_amount_bdt.value;
    const transaction_methods = form.transaction_methods.value;
    const transaction_id = form.transaction_id.value;
    const required_support = form.required_support.value;
    const incident_spot = form.incident_spot.value;
    const img = form.img.value;
    const formData = { name, medical_history, injury_date, age, gender, contact_details, occupation, blood_group, current_status, treatment_type, fund_amount_bdt, fund_status, transaction_date, receiver_amount_bdt, transaction_methods, transaction_id, required_support, incident_spot, img }
    console.log(formData);
    
    fetch('http://localhost:5000/datas', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        
      })

  };

  return (
    <div>
      <Navbar></Navbar>
      <div className="p-5 container mx-auto">
        <h1 className="text-2xl font-bold mb-4">Add New User</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="input input-bordered w-full"
            required
          />
          <textarea
            name="medical_history"
            placeholder="Medical History"
            className="textarea textarea-bordered w-full"
          ></textarea>
          <input
            name="injury_date"
            placeholder="injury_date"
            className="input input-bordered w-full"
          />
          <input
            type="number"
            name="age"
            placeholder="Age"
            className="input input-bordered w-full"
            required
          />
          <select
            name="gender"
            className="select select-bordered w-full"
            required
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
          <input
            type="text"
            name="contact_details"
            placeholder="Contact Details"
            className="input input-bordered w-full"
            required
          />
          <input
            type="text"
            name="occupation"
            placeholder="Occupation"
            className="input input-bordered w-full"
          />
          <input
            type="text"
            name="blood_group"
            placeholder="Blood Group"
            className="input input-bordered w-full"
          />
          <input
            type="text"
            name="current_status"
            placeholder="Current Status"
            className="input input-bordered w-full"
          />
          <input
            type="text"
            name="treatment_type"
            placeholder="Treatment Type"
            className="input input-bordered w-full"
          />
          <input
            type="number"
            name="fund_amount_bdt"
            placeholder="Fund Amount (BDT)"
            className="input input-bordered w-full"
          />
          <input
            type="text"
            name="fund_status"
            placeholder="Fund Status"
            className="input input-bordered w-full"
          />
          <input
            name="transaction_date"
            placeholder="transaction_date"
            className="input input-bordered w-full"
          />
          <input
            type="number"
            name="receiver_amount_bdt"
            placeholder="Receiver Amount (BDT)"
            className="input input-bordered w-full"
          />
          <input
            type="text"
            name="transaction_methods"
            placeholder="Transaction Methods"
            className="input input-bordered w-full"
          />
          <input
            type="text"
            name="transaction_id"
            placeholder="Transaction ID"
            className="input input-bordered w-full"
          />
          <textarea
            name="required_support"
            placeholder="Required Support"
            className="textarea textarea-bordered w-full"
          ></textarea>
          <input
            type="text"
            name="incident_spot"
            placeholder="Incident Spot"
            className="input input-bordered w-full"
          />
          <input
            type="text"
            name="img"
            placeholder="Image URL"
            className="input input-bordered w-full"
          />
          <button type="submit" className="btn bg-blue-400 text-white w-full">
            Submit
          </button>
        </form>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default AddData;
