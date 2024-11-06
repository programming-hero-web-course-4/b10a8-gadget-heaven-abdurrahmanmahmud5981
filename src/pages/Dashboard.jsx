import { useEffect, useRef, useState } from "react";
import SubHeading from "../components/SubHeading/SubHeading";
import {
  emptyCart,
  getAllCarts,
  getAllWishLists,
  removeFromCart,
  removeFromWishLists,
} from "../utils/utils";
import Cart from "../components/Cart/Cart";
import { BsSortNumericDownAlt } from "react-icons/bs";
import modalIcon from "../assets/Group.png";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

const Dashboard = () => {
  const [isActive, setIsActive] = useState(false);
  const [products, setProducts] = useState(getAllCarts() || []);
  const [Wishlist, setWishlist] = useState(getAllWishLists() || []);
  const modalRef = useRef(null);
  const navigate = useNavigate();
  const [price, setPrice] = useState(0);
  useEffect(() => {
    getAllWishLists;
    setProducts(getAllCarts());
    setPrice(
      getAllCarts().reduce((acc, curr) => acc + parseInt(curr.price), 0)
    );
  }, []);

  const sortProductsByPrice = () => {
    setProducts(
      [...products].sort((a, b) => parseInt(b.price) - parseInt(a.price))
    );
  };
  const handleDelete = (productId) => {
    removeFromCart(productId);
    setProducts(getAllCarts());
    setPrice(
      getAllCarts().reduce((acc, curr) => acc + parseInt(curr.price), 0)
    );
  };

  const handleWishlistDelete = (productId) => {
    removeFromWishLists(productId);
    setWishlist(getAllWishLists());
  };
  const handlePurchase = () => {
    modalRef.current.showModal();
    setPrice(
      getAllCarts().reduce((acc, curr) => acc + parseInt(curr.price), 0)
    );
    emptyCart();
    setProducts(getAllCarts());
  };
  return (
    <div className="mb-24">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Dashbord | Gadget Heaven</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="bg-primary text-white py-10 ">
        <SubHeading
          title="Dashboard"
          subTitle="Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
        />
        <div className=" flex justify-center items-center gap-6 mt-4 max-w-screen-sm mx-auto">
          <button
            onClick={() => setIsActive(false)}
            className={`btn rounded-full px-9 sm:px-16  ${
              isActive
                ? "border bg-transparent text-white hover:text-primary hover:bg-white"
                : "text-primary hover:bg-white "
            }`}
          >
            Cart
          </button>
          <button
            onClick={() => setIsActive(true)}
            className={`btn rounded-full px-6 sm:px-12  ${
              isActive
                ? "text-primary hover:bg-white"
                : "border bg-transparent text-white hover:text-primary hover:bg-white"
            }`}
          >
            Wishlist
          </button>
        </div>
      </div>
      <div className=" my-10 max-w-screen-2xl mx-auto w-11/12">
        <header className="flex flex-col gap-4 sm:flex-row justify-between sm:items-center">
          <h2 className="text-3xl font-bold">
            {isActive ? "Wishlist" : "Cart"}
          </h2>
          {isActive || (
            <div className="flex justify-between sm:items-center  gap-4 flex-col sm:flex-row">
              <p className="text-2xl font-bold">Total const: ${price} </p>
              <div className="">
                <button
                  onClick={sortProductsByPrice}
                  className="btn sm:px-8 bg-transparent border-primary text-primary rounded-full hover:bg-white mr-4"
                >
                  Sort by Price
                  <BsSortNumericDownAlt size={20} color="#8332C5" />
                </button>
                <button
                  onClick={handlePurchase}
                  disabled={price <= 0}
                  className="btn bg-primary text-white px-8 rounded-full hover:bg-white hover:text-primary "
                >
                  Purchase
                </button>
              </div>
            </div>
          )}
        </header>
        <div className="my-4">
          {isActive
            ? Wishlist.map((product) => (
                <Cart
                  key={crypto.randomUUID()}
                  product={product}
                  isActive={isActive}
                  handleWishlistDelete={handleWishlistDelete}
                />
              ))
            : products.map((product) => (
                <Cart
                  key={crypto.randomUUID()}
                  product={product}
                  setPrice={setPrice}
                  handleDelete={handleDelete}
                  isActive={isActive}
                />
              ))}
        </div>

        {/* Modal  */}
        <dialog
          ref={modalRef}
          id="my_modal_5"
          className="modal modal-bottom sm:modal-middle"
        >
          <div className="modal-box flex flex-col justify-center items-center">
            <img src={modalIcon} alt="modalIcon" className="w-20 h-20" />
            <h3 className="font-bold text-2xl mt-4">Payment Successfully</h3>
            <p className="py-4 text-gray-600 text-lg">Thanks for purchasing.</p>
            <span className="text-gray-600 text-lg">Total: ${price}</span>
            <div className="modal-action w-full">
              <button
                className="btn w-full rounded-full"
                onClick={() => {
                  setPrice(
                    getAllCarts().reduce(
                      (acc, curr) => acc + parseInt(curr.price),
                      0
                    )
                  );
                  modalRef.current.close();
                  navigate("/");
                }}
              >
                Close
              </button>
            </div>
          </div>
        </dialog>
      </div>
    </div>
  );
};

export default Dashboard;
