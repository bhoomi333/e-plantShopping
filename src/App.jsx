import { useState } from "react";
import "./App.css";
import ProductList from "./components/ProductList";

function App() {
  const [showProductList, setShowProductList] = useState(false);

  if (showProductList) {
    return <ProductList />;
  }

  return (
    <div className="landing-page">
      <h1>Paradise Nursery</h1>

      <p>
        Welcome to Paradise Nursery. Discover beautiful indoor and outdoor
        plants that bring freshness and life to your home.
      </p>

      <button
        className="get-started-btn"
        onClick={() => setShowProductList(true)}
      >
        Get Started
      </button>
    </div>
  );
}

export default App;
