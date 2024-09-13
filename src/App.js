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
        title = "";
        metaDescription = "";
        break;
      case "/signin":
        title = "";
        metaDescription = "";
        break;
      case "/signup":
        title = "";
        metaDescription = "";
        break;
      case "/news":
        title = "";
        metaDescription = "";
        break;
      case "/agents":
        title = "";
        metaDescription = "";
        break;
      case "/rent":
        title = "";
        metaDescription = "";
        break;
      case "/address":
        title = "";
        metaDescription = "";
        break;
      case "/sold":
        title = "";
        metaDescription = "";
        break;
      case "/search-reasult-agents":
        title = "";
        metaDescription = "";
        break;
      case "/search-reasult-address":
        title = "";
        metaDescription = "";
        break;
      case "/search-reasult-buy":
        title = "";
        metaDescription = "";
        break;
      case "/search-reasult-rent":
        title = "";
        metaDescription = "";
        break;
      case "/search-reasult-sold":
        title = "";
        metaDescription = "";
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
      <Route
        path="/search-reasult-address"
        element={<SearchReasultAddress />}
      />
      <Route path="/search-reasult-buy" element={<SearchReasultBuy />} />
      <Route path="/search-reasult-rent" element={<SearchReasultRent />} />
      <Route path="/search-reasult-sold" element={<SearchReasultSold />} />
    </Routes>
  );
}
export default App;
