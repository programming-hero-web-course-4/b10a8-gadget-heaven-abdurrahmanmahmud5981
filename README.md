# GadgetHeaven✨

An e-commerce platform for the latest gadgets, created with a responsive design and user-friendly experience. Built with React, this website allows users to explore, filter, and purchase gadgets with various interactive features.

## Live Website

[Visit GadgetHeaven](#) <!-- Insert live link here -->

## Project Requirements Document

[View Project Details](https://github.com/edust-org/edust/pull/65) <!-- Insert PDF link if available online -->

## React Fundamentals Used

- **React Components**: Structured reusable components for UI sections.
- **React Router**: Handled navigation with routes for a seamless experience.
- **State Management**: Managed complex state with React Context API.
- **useEffect & useState**: Handled data fetching and UI updates.
- **Hooks (useContext, useLocation, useNavigate)**: Enhanced functionality for navigation and dynamic styles.

## Data Management

- **Context API**: To manage global states for cart and wishlist.
- **LocalStorage**: Persisted cart and wishlist data across sessions.

## Key Features

1. **Dynamic Cart and Wishlist Management**
   - Add gadgets to cart or wishlist with instant updates.
   - The cart icon shows the number of items, and LocalStorage keeps data intact on page reload.
   
2. **Product Categories and Filtering**
   - Sidebar with categories (computers, phones, smart watches).
   - Gadgets displayed by category, with nested layout for specific filters.
   
3. **Detailed Product Pages**
   - Each gadget includes details like price, specifications, rating, and images.
   - "Add to Cart" and "Add to Wishlist" buttons with custom alerts using React-Toastify.
   
4. **Sorting and Price Calculation**
   - Sorting by price and total cart cost calculation.
   - Functional cart page with a total price display, sort by price option, and purchase option.
   
5. **Error Handling and Navigation**
   - Comprehensive 404 error page.
   - Confirmation modals and alerts using React-Toastify, providing a seamless experience.

## Installation

1. Clone the repo:
   ```bash
   git clone https://github.com/yourusername/gadgetheaven.git