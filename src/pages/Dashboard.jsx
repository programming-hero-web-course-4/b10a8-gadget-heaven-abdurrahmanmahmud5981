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
        <div className=" flex justify-center items-center gap-6 mt-4 max-w-screen-sm mx-auto">
          <button onClick={()=>setIsActive(false)}  className={`btn rounded-full px-9 sm:px-16  ${isActive ? "border bg-transparent text-white hover:text-primary hover:bg-white":"text-primary hover:bg-white "}`}>
            Cart
          </button>
          <button onClick={()=>setIsActive(true)}   className={`btn rounded-full px-6 sm:px-12  ${isActive ? 'text-primary hover:bg-white':"border bg-transparent text-white hover:text-primary hover:bg-white"}`}>
            Wishlist
          </button>
        </div>
      </div>
      <div className=" my-10 max-w-screen-2xl mx-auto w-11/12">
        <header className="flex flex-col gap-4 sm:flex-row justify-between sm:items-center">
          <h2 className="text-3xl font-bold">{isActive? "Wishlist" : "Cart"}</h2>
          {
            isActive || <div className="flex justify-between sm:items-center  gap-4 flex-col sm:flex-row">
            <p className="text-2xl font-bold">Total const: </p>
           <div className="">
           <button className="btn sm:px-8 bg-transparent border-primary text-primary rounded-full hover:bg-white mr-4">Sort by Price</button>
           <button className="btn bg-primary text-white px-8 rounded-full hover:bg-white hover:text-primary ">Purchase</button>
           </div>
          </div>
          }
        </header>
        <div className="my-4">
          <div className="card card-side bg-white">
            <figure className="w-60 h-40 border  ">
              <img src="" alt="" />
            </figure>
            <div className=" card-body">
              <h2 className=" card-title">title</h2>
              <p>description</p>
              <p>Price</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
