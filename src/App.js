// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import SignUp from "./pages/SignUp";
import News from "./pages/News";
import Agents from "./pages/Agents";
import Rent from "./pages/Rent";
import Address from "./pages/Address";
import Sold from "./pages/Sold";
import SearchReasultAgents from "./pages/SearchReasultAgents";
import SearchReasultAddress from "./pages/SearchReasultAddress";
import SearchReasultBuy from "./pages/SearchReasultBuy";
import SearchReasultRent from "./pages/SearchReasultRent";
import SearchReasultSold from "./pages/SearchReasultSold";
import Visualisations from "./pages/Visualisations";
import ProfileDashboard from "./pages/ProfileDashboard";
import Recommendations from "./pages/Recommendations";
import PriceComparison from "./pages/PriceComparison";
import PriceSimulation from "./pages/PriceSimulation"; // Import the PriceSimulation component

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/news" element={<News />} />
        <Route path="/agents" element={<Agents />} />
        <Route path="/rent" element={<Rent />} />
        <Route path="/address" element={<Address />} />
        <Route path="/sold" element={<Sold />} />
        <Route path="/search-reasult-agents" element={<SearchReasultAgents />} />
        <Route path="/search-reasult-address" element={<SearchReasultAddress />} />
        <Route path="/search-reasult-buy" element={<SearchReasultBuy />} />
        <Route path="/search-reasult-rent" element={<SearchReasultRent />} />
        <Route path="/search-reasult-sold" element={<SearchReasultSold />} />
        <Route path="/visualisations" element={<Visualisations />} />
        <Route path="/profile" element={<ProfileDashboard />} />
        <Route path="/recommendation" element={<Recommendations />} />
        <Route path="/pricecomparison" element={<PriceComparison />} />
        <Route path="/pricesimulation" element={<PriceSimulation />} /> {/* New route for Price Simulation */}
      </Routes>
    </div>
  );
}

export default App;
