import { Outlet } from "react-router-dom";
import HeroContent from "../Components/HeroContent";
import MovementList from "../Components/MovementList";
import Struggle from "../Components/Struggle";

const HomePage = () => {
  return (
    <div className="">
      <HeroContent></HeroContent>
      <Struggle></Struggle>
      <MovementList></MovementList>
      <Outlet></Outlet>
    </div>
  );
};

export default HomePage;