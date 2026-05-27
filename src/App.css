# Paradise Nursery - Sample Project Files

## README.md

```md
# Paradise Nursery

Paradise Nursery is a React-based shopping cart application for an online plant nursery.

Features:
- Browse houseplants by category
- Add products to cart
- Increase/decrease quantity
- Remove items from cart
- Dynamic cart total
- Redux state management
```

---

## src/components/AboutUs.jsx

```jsx
function AboutUs() {
  return (
    <div className="about-us">
      <h1>About Paradise Nursery</h1>
      <p>
        Paradise Nursery provides beautiful indoor plants for homes and offices.
        Our mission is to make spaces greener and healthier with affordable
        houseplants.
      </p>
    </div>
  );
}

export default AboutUs;
```

---

## src/App.css

```css
body {
  margin: 0;
  font-family: Arial, sans-serif;
}

.landing-page {
  height: 100vh;
  background-image: url("https://images.unsplash.com/photo-1466692476868-aef1dfb1e735");
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
}

.get-started-btn {
  padding: 12px 24px;
  border: none;
  background-color: green;
  color: white;
  font-size: 18px;
  cursor: pointer;
}
```

---

## src/App.jsx

```jsx
import "./App.css";

function App() {
  return (
    <div className="landing-page">
      <h1>Paradise Nursery</h1>
      <p>Beautiful plants for every home</p>

      <button className="get-started-btn">
        Get Started
      </button>
    </div>
  );
}

export default App;
```

---

## src/redux/CartSlice.jsx

```jsx
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: []
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = state.cartItems.find(
        (item) => item.id === action.payload.id
      );

      if (item) {
        item.quantity += 1;
      } else {
        state.cartItems.push({
          ...action.payload,
          quantity: 1
        });
      }
    },

    incrementQuantity: (state, action) => {
      const item = state.cartItems.find(
        (item) => item.id === action.payload
      );

      if (item) {
        item.quantity += 1;
      }
    },

    decrementQuantity: (state, action) => {
      const item = state.cartItems.find(
        (item) => item.id === action.payload
      );

      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },

    removeItem: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
    }
  }
});

export const {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeItem
} = cartSlice.actions;

export default cartSlice.reducer;
```

---

## src/components/ProductList.jsx

```jsx
import { useState } from "react";

function ProductList() {
  const [addedItems, setAddedItems] = useState([]);

  const plants = [
    {
      id: 1,
      name: "Snake Plant",
      price: 20,
      category: "Indoor",
      image: "https://via.placeholder.com/150"
    },
    {
      id: 2,
      name: "Peace Lily",
      price: 25,
      category: "Indoor",
      image: "https://via.placeholder.com/150"
    },
    {
      id: 3,
      name: "Aloe Vera",
      price: 15,
      category: "Succulent",
      image: "https://via.placeholder.com/150"
    },
    {
      id: 4,
      name: "Cactus",
      price: 18,
      category: "Succulent",
      image: "https://via.placeholder.com/150"
    },
    {
      id: 5,
      name: "Fern",
      price: 22,
      category: "Outdoor",
      image: "https://via.placeholder.com/150"
    },
    {
      id: 6,
      name: "Palm Plant",
      price: 30,
      category: "Outdoor",
      image: "https://via.placeholder.com/150"
    }
  ];

  function handleAdd(id) {
    setAddedItems([...addedItems, id]);
  }

  return (
    <div>
      <nav>
        <h2>Paradise Nursery</h2>
        <ul>
          <li>Home</li>
          <li>Plants</li>
          <li>Cart (0)</li>
        </ul>
      </nav>

      <h1>Our Plants</h1>

      <div className="plant-list">
        {plants.map((plant) => (
          <div key={plant.id} className="plant-card">
            <img src={plant.image} alt={plant.name} />
            <h3>{plant.name}</h3>
            <p>Category: {plant.category}</p>
            <p>${plant.price}</p>

            <button
              onClick={() => handleAdd(plant.id)}
              disabled={addedItems.includes(plant.id)}
            >
              {addedItems.includes(plant.id)
                ? "Added"
                : "Add to Cart"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
```

---

## src/components/CartItem.jsx

```jsx
function CartItem() {
  const cartItems = [
    {
      id: 1,
      name: "Snake Plant",
      price: 20,
      quantity: 2,
      image: "https://via.placeholder.com/150"
    }
  ];

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div>
      <h1>Shopping Cart</h1>

      <h2>Total Amount: ${totalAmount}</h2>

      {cartItems.map((item) => (
        <div key={item.id}>
          <img src={item.image} alt={item.name} />

          <h3>{item.name}</h3>

          <p>Unit Price: ${item.price}</p>

          <p>Total Cost: ${item.price * item.quantity}</p>

          <button>-</button>
          <span>{item.quantity}</span>
          <button>+</button>

          <button>Delete</button>
        </div>
      ))}

      <button onClick={() => alert("Coming Soon") }>
        Checkout
      </button>

      <button>
        Continue Shopping
      </button>
    </div>
  );
}

export default CartItem;
```

---

# What To Do Next

1. Create a GitHub repository
2. Upload these files
3. Keep the repo public
4. Open each file on GitHub
5. Copy individual file URLs
6. Submit those URLs in Coursera
