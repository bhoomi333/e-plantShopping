import { useState } from "react";
import "./App.css";
import ProductList from "./components/ProductList";

function App() {
  const [showProductList, setShowProductList] = useState(false);

  function handleGetStartedClick() {
    setShowProductList(true);
  }

  if (showProductList) {
    return <ProductList />;
  }

  return (
    <div className="landing-page">
      <h1>Paradise Nursery</h1>

      <p>
        Welcome to Paradise Nursery. Discover beautiful indoor and outdoor
        plants for your home and office.
      </p>

      <button
        className="get-started-btn"
        onClick={handleGetStartedClick}
      >
        Get Started
      </button>
    </div>
  );
}

export default App;
