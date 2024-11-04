import {  Outlet, useLocation } from "react-router-dom";
import Navber from "../components/Navber/Navber";
import Footer from "../components/Footer/Footer";


const MainLayout = () => {
  const location = useLocation();
  console.log(location.pathname === "/");
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
        {/* Dynamic content */}
        <main className="min-h-[calc(100vh-230px)] md:mb-96">
          <Outlet />
        </main>
        {/* Footer */}
        <Footer />
      </div>
    </>
  );
};

export default MainLayout;
