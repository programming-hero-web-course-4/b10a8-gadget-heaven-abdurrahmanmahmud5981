/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";

const SingleCard = ({ product }) => {
  const navigate = useNavigate();
  const { product_id, product_title, product_image,  price } = product;
  return (
    <div>
      <div className="card bg-base-100 w-full h-full shadow-xl ">
        <figure className=" h-64 p-4 sm:h-80 sm:p-8  w-full ">
          <img
            src={product_image}
            alt={product_title}
            className="w-full object-cover h-full rounded-md  sm:rounded-3xl "
          />
        </figure>
        <div className="card-body sm:pt-0">
          <h2 className="card-title">{product_title}!</h2>
          <p className="text-left text-gray-600 font-medium">Price: ${price}</p>
          <div className="card-actions ">
            <button
              className="btn border-primary text-primary rounded-full"
              onClick={() => navigate(`/product/${product_id}`)}
            >
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCard;
