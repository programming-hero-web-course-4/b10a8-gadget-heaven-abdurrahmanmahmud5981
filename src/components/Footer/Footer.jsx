

const Footer = () => {
  return (
    <>
      <div className="bg-white text-black">
        <div className=" py-8 text-center space-y-2 border-b-2 max-w-screen-2xl mx-auto">
          <h2 className="text-3xl font-bold ">Gadget Heaven</h2>
          <p className="text-gray-500">
            Leading the way in cutting-edge technology and innovation.
          </p>
        </div>

        <footer className=" sm:flex justify-around text-center footer  p-10 max-w-screen-2xl mx-auto">
          <nav className="flex flex-col items-center text-gray-600">
            <h6 className="footer-title text-black opacity-100">Services</h6>
            <a className=" link link-hover">Branding</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
          </nav>
          <nav className="flex flex-col items-center text-gray-600">
            <h6 className="footer-title text-black opacity-100">Company</h6>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
          </nav>
          <nav className="flex flex-col items-center text-gray-600">
            <h6 className="footer-title text-black opacity-100">Legal</h6>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </nav>
        </footer>
      </div>
    </>
  );
};

export default Footer;
