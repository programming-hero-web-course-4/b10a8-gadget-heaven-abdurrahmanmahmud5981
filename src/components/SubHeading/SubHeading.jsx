/* eslint-disable react/prop-types */

const SubHeading = ({ title = "", subTitle = "" }) => {
  return (
    <div className="text-center max-w-screen-xl px-2 sm:px-5 flex flex-col items-center gap-7 mx-auto">
      <h1 className="text-2xl md:text-3xl font-bold">{title}</h1>
      {subTitle && <p className="max-w-3xl sm:px-8">{subTitle}</p>}
    </div>
  );
};

export default SubHeading;
