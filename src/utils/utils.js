import toast from "react-hot-toast";


// get all carts from local storage
const getAllCarts = () => {
  return JSON.parse(localStorage.getItem('carts')) || [];
}
const getAllWishLists = () => {
  return JSON.parse(localStorage.getItem('wishlists')) || [];
}
// add a carts to local storage
const addToCart = product => {
  console.log(product);
  const carts = getAllCarts();
  carts.push(product)
  localStorage.setItem('carts', JSON.stringify(carts))
  toast.success(`${product.product_title} added to cart`);
}

const addToWishList = product => {
  console.log(product);
  const wishlists = getAllWishLists();
  const isE = wishlists.find(item => item.product_id === product.product_id)
  if (isE) return;
  wishlists.push(product)
  localStorage.setItem('wishlists', JSON.stringify(wishlists))
  toast.success(`${product.product_title} added to Wish List`);
}

// remove carts from local storage
const removeFromCart = product_id => {
  const carts = getAllCarts();
  const remaining = carts.filter(item => item.product_id !== product_id);

  localStorage.setItem('carts', JSON.stringify(remaining))
  toast.success("Product Successfully Removed From Cart");
}

const removeFromWishLists = product_id => {
  const wishlists = getAllWishLists();
  const remaining = wishlists.filter(item => item.product_id !== product_id);

  localStorage.setItem('wishlists', JSON.stringify(remaining))
  toast.success("Product Successfully Removed From Wish List");
}

// empty localStorage
const emptyCart = () => {
  localStorage.removeItem('carts');
}






export { addToCart, getAllCarts, removeFromCart, addToWishList, removeFromWishLists, getAllWishLists, emptyCart };