import {  Outlet, useLocation, useParams } from "react-router-dom";
import Navber from "../components/Navber/Navber";
import Footer from "../components/Footer/Footer";


const MainLayout = () => {
  const location = useLocation();
  const params = useParams()

  return (
    <>
      <div className="">
        {/* Navber */}
        {location.pathname === "/statistics" && (
          <div className="w-11/12 mx-auto">
            <Navber />
          </div>
        )}
        {location.pathname === "/dashboard" && (
          <div className="w-11/12 mx-auto">
            <Navber />
          </div>
        )}
        {Object.prototype.hasOwnProperty.call(params, "details") && (
          <div className="w-11/12 mx-auto">
            <Navber />
          </div>
        )}
        {/* Dynamic content */}
        <main className="min-h-[calc(100vh-230px)] md:mb-14">
          <Outlet />
        </main>
        {/* Footer */}
        <div className={`${Object.prototype.hasOwnProperty.call(params, "details") && "lg:mt-[50vh]"}`}>

        <Footer />
        </div>
      </div>
    </>
  );
};

export default MainLayout;
