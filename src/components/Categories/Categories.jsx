import { useContext } from "react";
import { DataContext } from "../../context/Context";
import { NavLink } from "react-router-dom";

const Categories = () => {
  const categories = useContext(DataContext);

  return (
    <div className="flex xl:flex-col gap-3 flex-wrap   l   justify-between sm:justify-center bg-white py-4 px-4 border rounded-2xl">
      <NavLink
        to="/"
        className={({ isActive }) => {
          return `btn xl:w-full rounded-full block text-start px-5 py-4  ${
            isActive
              ? "!bg-primary !text-white hover:text-gray-600"
              : "text-gray-600"
          }`;
        }}
      >
        All Products
      </NavLink>
      <div className="flex xl:flex-col gap-3 flex-wrap sm:justify-center">
        {categories.map((category) => (
          <NavLink
            to={`/${category.name.toLowerCase()}`}
            key={category.id}
            className={({ isActive }) => {
              return `btn xl:w-full rounded-full block text-start px-5 py-4  ${
                isActive
                  ? "!bg-primary !text-white hover:text-gray-600"
                  : "text-gray-600"
              }`;
            }}
          >
            {category.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Categories;
