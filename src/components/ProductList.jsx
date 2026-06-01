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
      name: "Spider Plant",
      price: 18,
      category: "Indoor",
      image: "https://via.placeholder.com/150"
    },
    {
      id: 4,
      name: "Aloe Vera",
      price: 15,
      category: "Succulent",
      image: "https://via.placeholder.com/150"
    },
    {
      id: 5,
      name: "Cactus",
      price: 18,
      category: "Succulent",
      image: "https://via.placeholder.com/150"
    },
    {
      id: 6,
      name: "Jade Plant",
      price: 22,
      category: "Succulent",
      image: "https://via.placeholder.com/150"
    },
    {
      id: 7,
      name: "Fern",
      price: 22,
      category: "Outdoor",
      image: "https://via.placeholder.com/150"
    },
    {
      id: 8,
      name: "Palm Plant",
      price: 30,
      category: "Outdoor",
      image: "https://via.placeholder.com/150"
    },
    {
      id: 9,
      name: "Bamboo Plant",
      price: 28,
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
          <li>🛒 Cart ({addedItems.length})</li>
        </ul>
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
