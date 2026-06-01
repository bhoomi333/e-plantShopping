import { useState } from "react";

function ProductList() {
  const [addedItems, setAddedItems] = useState([]);

 const plants = [
  // Indoor
  { id: 1, name: "Snake Plant", price: 20, category: "Indoor", image: "https://via.placeholder.com/150" },
  { id: 2, name: "Peace Lily", price: 25, category: "Indoor", image: "https://via.placeholder.com/150" },
  { id: 3, name: "Spider Plant", price: 18, category: "Indoor", image: "https://via.placeholder.com/150" },
  { id: 4, name: "ZZ Plant", price: 24, category: "Indoor", image: "https://via.placeholder.com/150" },
  { id: 5, name: "Pothos", price: 17, category: "Indoor", image: "https://via.placeholder.com/150" },
  { id: 6, name: "Rubber Plant", price: 29, category: "Indoor", image: "https://via.placeholder.com/150" },

  // Succulent
  { id: 7, name: "Aloe Vera", price: 15, category: "Succulent", image: "https://via.placeholder.com/150" },
  { id: 8, name: "Cactus", price: 18, category: "Succulent", image: "https://via.placeholder.com/150" },
  { id: 9, name: "Jade Plant", price: 22, category: "Succulent", image: "https://via.placeholder.com/150" },
  { id: 10, name: "Echeveria", price: 16, category: "Succulent", image: "https://via.placeholder.com/150" },
  { id: 11, name: "Haworthia", price: 14, category: "Succulent", image: "https://via.placeholder.com/150" },
  { id: 12, name: "Sedum", price: 19, category: "Succulent", image: "https://via.placeholder.com/150" },

  // Outdoor
  { id: 13, name: "Fern", price: 22, category: "Outdoor", image: "https://via.placeholder.com/150" },
  { id: 14, name: "Palm Plant", price: 30, category: "Outdoor", image: "https://via.placeholder.com/150" },
  { id: 15, name: "Bamboo Plant", price: 28, category: "Outdoor", image: "https://via.placeholder.com/150" },
  { id: 16, name: "Rose Plant", price: 26, category: "Outdoor", image: "https://via.placeholder.com/150" },
  { id: 17, name: "Hibiscus", price: 24, category: "Outdoor", image: "https://via.placeholder.com/150" },
  { id: 18, name: "Marigold", price: 12, category: "Outdoor", image: "https://via.placeholder.com/150" }
];

  function handleAdd(id) {
    setAddedItems([...addedItems, id]);
  }

  return (
    <div>
      <nav>
  <a href="/">Home</a>
  <a href="/plants">Plants</a>
  <a href="/cart">Cart ({addedItems.length})</a>
</nav>

      <h1>Our Plants</h1>

      <h2>Indoor Plants</h2>
      {plants
        .filter((plant) => plant.category === "Indoor")
        .map((plant) => (
          <div key={plant.id}>
            <img src={plant.image} alt={plant.name} />
            <h3>{plant.name}</h3>
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

      <h2>Succulent Plants</h2>
      {plants
        .filter((plant) => plant.category === "Succulent")
        .map((plant) => (
          <div key={plant.id}>
            <img src={plant.image} alt={plant.name} />
            <h3>{plant.name}</h3>
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

      <h2>Outdoor Plants</h2>
      {plants
        .filter((plant) => plant.category === "Outdoor")
        .map((plant) => (
          <div key={plant.id}>
            <img src={plant.image} alt={plant.name} />
            <h3>{plant.name}</h3>
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
  );
}

export default ProductList;
