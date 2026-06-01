import { useState } from "react";

function CartItem() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Snake Plant",
      price: 20,
      quantity: 2,
      image: "https://via.placeholder.com/150"
    },
    {
      id: 2,
      name: "Peace Lily",
      price: 25,
      quantity: 1,
      image: "https://via.placeholder.com/150"
    }
  ]);

  function increaseQuantity(id) {
    setCartItems(
      cartItems.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  }

  function decreaseQuantity(id) {
    setCartItems(
      cartItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  }

  function deleteItem(id) {
    setCartItems(
      cartItems.filter((item) => item.id !== id)
    );
  }

  function calculateTotalAmount() {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  }

  return (
    <div>
      <h1>Shopping Cart</h1>

      <h2>Total Amount: ${calculateTotalAmount()}</h2>

      {cartItems.map((item) => (
        <div key={item.id}>
          <img src={item.image} alt={item.name} />

          <h3>{item.name}</h3>

          <p>Unit Price: ${item.price}</p>

          <p>
            Total Cost: $
            {item.price * item.quantity}
          </p>

          <button
            onClick={() => decreaseQuantity(item.id)}
          >
            -
          </button>

          <span>{item.quantity}</span>

          <button
            onClick={() => increaseQuantity(item.id)}
          >
            +
          </button>

          <button
            onClick={() => deleteItem(item.id)}
          >
            Delete
          </button>
        </div>
      ))}

      <button
        onClick={() => alert("Coming Soon")}
      >
        Checkout
      </button>

      <button>
        Continue Shopping
      </button>
    </div>
  );
}

export default CartItem;
