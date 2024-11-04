/* eslint-disable react/prop-types */

const Heading = ({ title, subTitle }) => {
  return (
    <div className="text-center max-w-screen-xl px-2 sm:px-5 flex flex-col items-center gap-7 mx-auto">
      <h1 className={` text-3xl md:text-6xl font-bold `}>{title}</h1>
      {subTitle && <p className="max-w-3xl sm:px-8">{subTitle}</p>}
    </div>
  );
};

export default Heading;
