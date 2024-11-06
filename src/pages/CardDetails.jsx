import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import SubHeading from "../components/SubHeading/SubHeading";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegHeart, FaStar } from "react-icons/fa";
import ReactStars from "react-rating-stars-component";
import { addToCart, addToWishList, getAllWishLists } from "../utils/utils";

const CardDetails = () => {
  const data = useLoaderData();
  const cardId = parseInt(useParams().details);

  const [cardDetails, setCardDetails] = useState({});
  const [isFavorite, setIsFavorite] = useState(false);
  useEffect(() => {
    const card = [...data]?.find(
      (item) => parseInt(item?.product_id) === cardId
    );
    setCardDetails(card);
    const isExist = getAllWishLists().find(
      (item) => item?.product_id == card?.product_id
    );
    if (isExist) {
      setIsFavorite(true);
    }
  }, [cardId, data]);

  const {
    product_title,
    product_image,
    price,
    description,
    availability,
    specification,
    rating,
  } = cardDetails;

  const handleAddToCart = (product) => {
    addToCart(product);
  };
  const handleAddToWishlist = (product) => {
    addToWishList(product);
    setIsFavorite(true);
  };
  return (
    <>
      <div className="bg-primary text-white pt-12 space-y-7 min-h-96 lg:max-h-80 pb-10">
        <SubHeading
          title="Product Details"
          subTitle="Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
        />
        <div className="text-black w-11/12 mx-auto max-w-screen-xl flex justify-center  ">
          <div className=" w-full   card lg:card-side bg-base-100 shadow-xl lg:max-h-[560px] ">
            <figure className=" p-4 sm:p-8 lg:pr-0 w-full lg:max-h-fit  lg:flex-1 lg:flex-shrink-0 sm:h-[700px] lg:h-auto ">
              <img
                src={product_image}
                alt={product_title}
                className=" w-full h-full   object-cover rounded-3xl"
              />
            </figure>
            <div className="card-body  h-fit lg:flex-1  ">
              <h2 className="card-title text-3xl">{product_title}</h2>
              <h5 className=" text-xl font-semibold text-gray-700">
                Price: ${price}
              </h5>
              <p className="text-lg font-normal text-gray-500">{description}</p>
              <span
                className={` px-2 py-1  w-fit rounded-full border ${
                  availability
                    ? " bg-green-100 text-green-600  border-green-300"
                    : "bg-red-100 text-red-600 border-red-300"
                }`}
              >
                {availability ? "In Stock " : "Out of Stock"}
              </span>
              <h3 className=" mt-3 font-bold text-lg ">Specification</h3>
              <ol className=" list-decimal list-inside">
                {specification &&
                  specification?.map((item, index) => (
                    <li key={index} className="text-gray-600  text-lg">
                      {item}
                    </li>
                  ))}
              </ol>
              <h3 className="font-bold text-lg flex items-center gap-2 ">
                <span>Rating</span>
                <FaStar color="orange" />
              </h3>
              <div className="flex items-center gap-1">
                <span>
                  <ReactStars
                    count={5}
                    size={35}
                    isHalf={true}
                    activeColor="orange"
                  />
                </span>
                <span className=" ml-4 p-2 bg-stone-100 rounded-xl">
                  {rating}
                </span>
              </div>

              <div className=" flex items-center gap-2">
                <button
                  onClick={() => handleAddToCart(cardDetails)}
                  className="btn bg-primary text-white rounded-full hover:text-black"
                >
                  <span>Add to Cart</span> <MdOutlineShoppingCart size={19} />
                </button>
                <button
                  disabled={isFavorite}
                  onClick={() => handleAddToWishlist(cardDetails)}
                  className="btn btn-circle"
                >
                  <FaRegHeart size={22} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardDetails;
