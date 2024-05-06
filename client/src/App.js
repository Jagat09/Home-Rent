// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import './App.css';
// import HomePage from "./pages/Homepage";
// import RegisterPage from "./pages/RegisterPage";
// import LoginPage from "./pages/LoginPage";

// function App() {
//   return (
//     <div className="App">
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<HomePage />} />
//           <Route path="/register" element={<RegisterPage />} />
//           <Route path="/login" element={<LoginPage />} />
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux"; // Import Provider from react-redux
import { store, persistor } from "./redux/store"; // Import store and persistor separately
 // Import your Redux store
import './App.css';
import HomePage from "./pages/Homepage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import CreateListing from "./pages/CreateListing";
import ListingDetails from "./pages/ListingDetails";
import TripList from "./pages/TripList"
import WishList from "./pages/WishList"
import PropertyList from "./pages/PropertyList";
import ReservationList from "./pages/ReservationList";
import CategoryPage from "./pages/CategoryPage";
import SearchPage from "./pages/SearchPage";

function App() {
  return (
    <Provider store={store}> {/* Wrap your component with Provider */}
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/create-listing" element={<CreateListing />} />
            <Route path="/properties/:listingId" element={<ListingDetails />} />
            <Route path="/properties/category/:category" element={<CategoryPage />} />
            <Route path="/properties/search/:search" element={<SearchPage />} />
            <Route path="/:userId/trips" element={<TripList />} />
            <Route path="/:userId/wishList" element={<WishList />} />
            <Route path="/:userId/properties" element={<PropertyList />} />
            <Route path="/:userId/reservations" element={<ReservationList />} />
          </Routes>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;

