import { useLoaderData } from "react-router-dom";


const DetailsUser = () => {
  const data = useLoaderData();
 
 console.log(data);
 

  return (
    <div>
      <div className='space-y-3 bg-blue-400 p-16 pb-40 text-white'>
        <h3 className='text-4xl text-center font-bold'>Personal Details</h3>
        <p className='text-center'>In various regions, many people suffer from injuries, often requiring immediate medical attention and long-term support. <br /> Injuries can range from fractures and gunshot wounds to amputations and surgeries.</p>
      </div>
      <div className='flex gap-3 border rounded-2xl pt-32 bg-white container mx-auto relative -top-36'>
        <div className='ml-32'>
          <img className='w-[350px]' src={data.img} alt={data.name} />
        </div>
        <div className='ml-40 space-y-3 pb-7'>
          <h3 className='text-3xl font-bold'>Name : {data.name}</h3>
          <p className='text-xl font-bold'>Medical History : {data.medical_history}</p>
          <p className='text-xl font-bold'>Age : {data.age}</p>
          <p className='text-xl font-bold'>Gender : {data.gender}</p>
          <p className='text-xl font-bold'>Contact : {data.contact_details}</p>
          <p className='text-xl font-bold'>Blood Group : {data.blood_group}</p>
          <p className='text-xl font-bold'>Treatment Type : {data.treatment_type}</p>
          <p className='text-xl font-bold'>Support: {data.required_support}</p>
          <p className='text-xl font-bold'>Incident Spot : {data.incident_spot}</p>
          <button className="btn bg-blue-400 text-white font-bold ">Donate Now</button>
          </div>
        </div>
      </div>
    
  );
};

export default DetailsUser;