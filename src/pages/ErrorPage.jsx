import { useNavigate } from "react-router-dom";
import errorImg from "../assets/404 Error with a cute animal-bro.png";
import { Helmet } from "react-helmet";
const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <div className="  mockup-window bg-purple-600 border m-20">
      <Helmet>
        <title>404 | Gadget Heaven</title>
      </Helmet>
        <div className="bg-purple-100 flex justify-center px-4 py-16">
      <div className="  boxShadow px-10 w-full lg:flex-row gap-[30px] lg:gap-0 flex-col flex items-center justify-evenly py-20 rounded-xl">
        <div className="w-[80%] lg:w-[40%]">
          <img src={errorImg} alt="illustration" className="w-full" />
        </div>

        <div className="w-full lg:w-[30%] text-center lg:text-start">
          <h1 className="text-[2.5rem] sm:text-[4rem] font-[800] text-primary leading-[80px]">
            OOPS!
          </h1>

          <h3 className="text-primary/80 text-[0.9rem] sm:text-[1.2rem]">
            Looks like big foot has broken the link
          </h3>

          <button
            onClick={() => navigate("/")}
            className="py-3 px-6 sm:px-8 text-[0.9rem] sm:text-[1rem] rounded-full bg-primary text-white mt-8"
          >
            Back to homepage
          </button>
        </div>
      </div>
      </div>
    </div>
  );
};

export default ErrorPage;
