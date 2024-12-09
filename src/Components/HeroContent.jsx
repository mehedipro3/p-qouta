import { Link } from 'react-router-dom';
import img1 from '../assets/1.Bangladesh_quota_reform_movement_2024.jpg'
const HeroContent = () => {
  return (
    <div>
      <div className='container mx-auto relative'>
        <img src={img1} alt="Quota" className='brightness-50'  />
      </div>
      <div className='absolute top-72 left-20 space-y-4'>
        <h2 className='text-5xl font-bold text-white'>2024 Bangladesh Quota Reform <br /> Movement: A Fight for Equality</h2>
        <p className='text-xl font-semibold text-white'>The 2024 Bangladesh Quota Reform Movement has been a pivotal moment in our <br /> nation`s history, where thousands of students and citizens stood up for their rights, <br /> demanding an end to discriminatory quota practices.</p>
        <div className='space-x-4'>
          <Link to={'/submitInfo'}>
          <button className='btn'>Submit_Info</button>
          </Link>
          <Link to={'/contactUs'}>
          <button className='btn'>Contact Us</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroContent;