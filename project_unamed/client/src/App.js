import React, { useEffect, useState } from 'react';  // Import React and some hooks to manage state and side-effects
import axios from 'axios';                           // Import axios to make HTTP requests (fetch product data)
import './App.css';                                  // Import styling

function App() {
  const [products, setProducts] = useState([]);      // Create a state variable to store the products

  useEffect(() => {
    // Fetch products from the backend when the component loads
    axios.get('http://localhost:5000/api/products')
      .then(response => {
        setProducts(response.data);  // Set the products in state once data is fetched
      })
      .catch(error => console.error("Error fetching data:", error));
  }, []);  // Empty array means this effect runs once on component mount

  // Return the UI that renders the products
  return (
    <div className="App">
      <header>
        <h1>E-commerce Site</h1>
      </header>
      <div className="product-grid">
        {products.map(product => (  // Loop over each product and create a UI card for it
          <div className="product-card" key={product.id}>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
