import { Outlet } from "react-router-dom"
import Categories from "../Categories/Categories"
import Heading from "../Heading/Heading"


const Gadgets = () => {
    
  return (
    <div className="mt-16 sm:mt-56 lg:mt-96 w-11/12 mx-auto max-w-screen-2xl text-center">
        <Heading title="Explore Cutting-Edge Gadgets" subTitle="" />
        <div className="grid grid-cols-12 gap-4 mt-12">
          {/* Add your gadget cards here */}
          <div className="col-span-full xl:col-span-2 ">
            <Categories/>
          </div>
          <div className=" col-span-full xl:col-span-10  ">
            <Outlet/>
          </div>
        </div>
      <div></div>
    </div>
  )
}

export default Gadgets