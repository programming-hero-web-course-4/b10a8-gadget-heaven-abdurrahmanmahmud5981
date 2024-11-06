import { Link, useLoaderData } from "react-router-dom";
import Heading from "../components/Heading/Heading";
import bannerImage from "../assets/banner.jpg";
import Navber from "../components/Navber/Navber";
import Gadgets from "../components/Gadgets/Gadgets";
import { DataContext } from "../context/Context";
import { useState } from "react";
import { Helmet } from "react-helmet";

const Home = () => {
  const data = useLoaderData();
  const [categories, setCategories] = useState(data);

  return (
    <>
    <Helmet>
                <meta charSet="utf-8" />
                <title>Home | Gadget Heaven</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
      <header
        className=" bg-primary text-secondary m-3 mx-auto
            max-w-screen-2xl w-11/12 rounded-[32px]  sm:pb-64 flex flex-col justify-center items-center gap-8 p-3 relative md:mb-80 mb-0"
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
          <img
            className="rounded-[32px] h-full object-cover w-full"
            src={bannerImage}
            alt="banner Image"
          />
        </div>
      </header>

      <div className="  xl:mt-[580px] md:mt-10 sm:m-0">
        <DataContext.Provider value={categories}>
          <Gadgets />
        </DataContext.Provider>
      </div>
    </>
  );
};

export default Home;
