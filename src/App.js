import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
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
import AiModels from "./pages/AiModels";  // Imported AI Models page

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "Home";
        metaDescription = "Welcome to the home page.";
        break;
      case "/signin":
        title = "Sign In";
        metaDescription = "Sign in to your account.";
        break;
      case "/signup":
        title = "Sign Up";
        metaDescription = "Create a new account.";
        break;
      case "/news":
        title = "News";
        metaDescription = "Latest real estate news.";
        break;
      case "/agents":
        title = "Agents";
        metaDescription = "Find real estate agents.";
        break;
      case "/rent":
        title = "Rent";
        metaDescription = "Find properties for rent.";
        break;
      case "/address":
        title = "Address Search";
        metaDescription = "Search for properties by address.";
        break;
      case "/sold":
        title = "Sold Properties";
        metaDescription = "See sold properties.";
        break;
      case "/search-reasult-agents":
        title = "Agent Search Results";
        metaDescription = "Find agents based on your search.";
        break;
      case "/search-reasult-address":
        title = "Address Search Results";
        metaDescription = "Find properties by address.";
        break;
      case "/search-reasult-buy":
        title = "Buy Search Results";
        metaDescription = "Find properties to buy.";
        break;
      case "/search-reasult-rent":
        title = "Rent Search Results";
        metaDescription = "Find rental properties.";
        break;
      case "/search-reasult-sold":
        title = "Sold Search Results";
        metaDescription = "See results for sold properties.";
        break;
      case "/visualisations":
        title = "Data Visualisations";
        metaDescription = "Explore data visualisations.";
        break;
      case "/ai-models":  // AI Models page
        title = "AI Models";
        metaDescription = "Explore AI models and results.";
        break;
      default:
        title = "Real Estate";
        metaDescription = "Your go-to real estate platform.";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
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
      <Route path="/ai-models" element={<AiModels />} />  {/* AI Models route */}
    </Routes>
  );
}

export default App;
