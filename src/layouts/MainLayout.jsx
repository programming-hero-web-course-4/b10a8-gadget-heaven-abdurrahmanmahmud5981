import { Link, Outlet, useLocation } from "react-router-dom";
import Navber from "../components/Navber/Navber";
import Footer from "../components/Footer/Footer";
import Heading from "../components/Heading/Heading";
import Home from "../pages/Home";

const MainLayout = () => {
  const location = useLocation();
  console.log(location.pathname === "/");
  return (
    <>
      <div className="">
        {/* Navber */}
        {location.pathname !== "/" && (
          <div className="w-11/12 mx-auto">
            <Navber />
          </div>
        )}
        {/* {location.pathname === "/" && (
          
        )} */}
        {/* Dynamic content */}
        <main className="min-h-[calc(100vh-230px)]">
          <Outlet />
        </main>
        {/* Footer */}
        <Footer />
      </div>
    </>
  );
};

export default MainLayout;
