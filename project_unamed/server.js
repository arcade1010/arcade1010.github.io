const express = require('express');  // Import Express to create the server
const cors = require('cors');        // Import CORS to allow the frontend to communicate with this server

const app = express();               // Create the Express app (our web server)
const PORT = 5000;                   // Define the port where the server will run

app.use(cors());                     // Use CORS to allow cross-origin requests (i.e., frontend and backend can talk)

// Sample product data - this would be served to the frontend
const products = [
  { id: 1, name: 'Product 1', price: 50, description: 'Description for product 1' },
  { id: 2, name: 'Product 2', price: 100, description: 'Description for product 2' },
  { id: 3, name: 'Product 3', price: 150, description: 'Description for product 3' },
];

// API endpoint to get products
app.get('/api/products', (req, res) => {
  res.json(products);                // Send the product data as a response
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);  // Log that the server is running
});
