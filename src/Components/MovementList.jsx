import { useLoaderData } from "react-router-dom";
import Users from "./Users";


const MovementList = () => {
  const data = useLoaderData();
  return (
    <div className="space-y-3 text-center container mx-auto">
      <h2 className="text-5xl font-bold text-center">List of Martyrs and Injury&apos;s in the Movement</h2>
      <p className="text-lg font-semibold">These martyrs did not just give their lives; they gifted us a future free from the chains of autocracy. <br /> Their courage in the face of overwhelming adversity serves as a beacon of <br /> hope and a reminder of the power of unity and determination.</p>

      <div className="ml-7 grid md:grid-cols-2 lg:grid-cols-3 gap-3 py-10">
        {
          data.map((user=><Users key={user._id} user={user}></Users>))
        }
      </div>

    </div>
  );
};

export default MovementList;