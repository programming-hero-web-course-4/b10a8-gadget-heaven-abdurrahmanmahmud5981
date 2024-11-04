import { Link } from "react-router-dom";
import Heading from "../components/Heading/Heading";
import bannerImage from "../assets/banner.jpg";
import Navber from "../components/Navber/Navber";

const Home = () => {
  return (
    <>
      <header
        className=" bg-primary text-secondary m-3 mx-auto
            max-w-screen-2xl w-11/12 rounded-[32px]  sm:pb-64 flex flex-col justify-center items-center gap-8 p-3 relative mb-80"
      >
        <Navber />
        <Heading
          title="Upgrade Your Tech Accessorize with Gadget Heaven Accessories"
          subTitle="Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
        />
         <Link
          to="/dashboard"
          className="btn rounded-full text-primary px-8 hover:bg-secondary/90"
        >
          <button>Shop Now</button>
        </Link>
        <div className="  sm:max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-5xl border p-4 rounded-[32px] block  sm:absolute  sm:-bottom-28 md:-bottom-44  xl:-bottom-80  transform   sm:translate-y-14 lg:translate-y-36     w-full ">
            <img className="rounded-[32px] h-full object-cover w-full" src={bannerImage} alt="banner Image" />
        </div>
      </header>
    </>
  );
};

export default Home;
