import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import SubHeading from "../components/SubHeading/SubHeading";
import { MdOutlineShoppingCart } from "react-icons/md";
const CardDetails = () => {
  const data = useLoaderData();
  const cardId = parseInt(useParams().details);

  const [cardDetails, setCardDetails] = useState({});
  useEffect(() => {
    const card = [...data].find((item) => parseInt(item.product_id) === cardId);
    setCardDetails(card);
  }, [cardId, data]);

  console.log(cardDetails);
  const {
    product_id,
    product_title,
    product_image,
    price,
    description,
    availability,
    specification,
  } = cardDetails;
  return (
    <>
      <div className="bg-primary text-white pt-12 min-h-96 space-y-14">
        <SubHeading
          title="Product Details"
          subTitle="Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
        />
        <div className="text-black w-11/12 mx-auto transform">
          <div className="card card-side bg-base-100 shadow-xl">
            <figure className="p-8 pr-0 w-full  flex-1 ">
              <img
                src={product_image}
                alt={product_title}
                className=" w-full h-full  flex-auto object-cover rounded-3xl"
              />
            </figure>
            <div className="card-body w-2/6 h-fit">
              <h2 className="card-title text-3xl">{product_title}</h2>
              <h5 className=" text-xl font-semibold text-gray-700">
                Price: ${price}
              </h5>
              <p className="text-lg font-normal text-gray-500">{description}</p>
              <span className=" px-2 py-1  w-fit rounded-full bg-green-100 text-green-600 border border-green-300">
                {availability ? "In Stock " : "Out of Stock"}
              </span>
              <h3 className=" mt-3 font-bold text-lg ">Specification</h3>
              <ol className=" list-decimal list-inside">
                {specification &&
                  specification.map((item, index) => (
                    <li key={index} className="text-gray-600  text-lg">
                      {item}
                    </li>
                  ))}
              </ol>
              <h3 className="font-bold text-lg ">Rating</h3>
              <div className=""></div>
              <div className="mt-4 flex items-center gap-2">
                <button className="btn bg-primary text-white rounded-full hover:text-black">
                  <span>Add to Cart</span> <MdOutlineShoppingCart size={19} />
                </button>
                <button className="btn btn-circle">
                <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
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
