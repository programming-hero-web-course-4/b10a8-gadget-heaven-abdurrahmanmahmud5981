/* eslint-disable react/prop-types */
import { CiCircleRemove } from "react-icons/ci";
import { MdOutlineShoppingCart } from "react-icons/md";
import { addToCart } from "../../utils/utils";

const Cart = ({
  product,
  handleDelete,
  handleWishlistDelete,
  isActive,
  
}) => {
  const { product_id, product_title, product_image, price, description } =
    product;

    const handleAddToCart = (product) => {
        addToCart(product)
      };
  return (
    <div className="mb-7">
      <div className="card sm:card-side bg-base-100 shadow-xl relative ">
        <figure className="h-full  p-6 pr-0">
          <img
            className="h-[140px] rounded w-[130px] object-cover"
            src={product_image}
            alt={product_title}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{product_title}</h2>
          <p>{description}</p>
          <h4 className="font-semibold text-xl">Price: ${price}</h4>
          {isActive && (
            <button
              onClick={() => handleAddToCart(product)}
              className="btn bg-primary text-white rounded-full hover:text-black w-fit"
            >
              <span>Add to Cart</span> <MdOutlineShoppingCart size={19} />
            </button>
          )}
        </div>
        <span
          onClick={() => isActive ? handleWishlistDelete(product_id):handleDelete(product_id) }
          className="text-red-600 sm:m-16 cursor-pointer absolute sm:block right-0 m-2"
        >
          <CiCircleRemove size={50} />
        </span>
      </div>
    </div>
  );
};

export default Cart;
