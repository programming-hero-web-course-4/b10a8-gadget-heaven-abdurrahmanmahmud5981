import { useState } from "react";
import SubHeading from "../components/SubHeading/SubHeading";

const Dashboard = () => {
  const [isActive,setIsActive] = useState(false);
  return (
    <div>
      <div className="bg-primary text-white py-10">
        <SubHeading
          title="Dashboard"
          subTitle="Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
        />
        <div className=" flex justify-center items-center gap-6 mt-4">
          <button onClick={()=>setIsActive(false)}  className={`btn rounded-full px-16  ${isActive ? "border bg-transparent text-white hover:text-primary hover:bg-white":"text-primary hover:bg-white "}`}>
            Cart
          </button>
          <button onClick={()=>setIsActive(true)}   className={`btn rounded-full px-12  ${isActive ? 'text-primary hover:bg-white':"border bg-transparent text-white hover:text-primary hover:bg-white"}`}>
            Wishlist
          </button>
        </div>
      </div>
      <div className=""></div>
    </div>
  );
};

export default Dashboard;
