import { useLocation } from "react-router-dom";
import Navber from "../components/Navber/Navber";

const MainLayout = () => {
    const location = useLocation()
    console.log(location.pathname === '/');
  return (
    <>
      {/* Navber */}
    
      <header className=" bg-primary text-secondary w-11/12 mx-auto my-8 rounded-[32px] p-2 overflow-hidden">
        <Navber />
      </header>
    </>
  );
};

export default MainLayout;
