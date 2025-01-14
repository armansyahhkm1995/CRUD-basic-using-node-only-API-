const express = require("express");
const app = express();
const mongoose = require("mongoose");
const productRoute = require("./routes/product.router");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(3000, () => {
  console.log("server is running on port 3000");
});

app.use("/api/products", productRoute);

// Testing server
app.get("/", (req, res) => {
  res.send("Hello from node API server 2");
});

// // Get all products
// app.get("/api/products", async (req, res) => {
//   try {
//     const products = await Product.find({});
//     res.status(200).json(products);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// // Get a single product
// app.get("/api/product/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const product = await Product.findById(id);
//     res.status(200).json(product);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// // Create a product
// app.post("/api/products", async (req, res) => {
//   try {
//     const product = await Product.create(req.body);
//     res.status(200).json(product);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// // Update a product
// app.put("/api/product/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const product = await Product.findByIdAndUpdate(id, req.body);
//     if (!product) {
//       res.status(404).json("Product not found");
//     }
//     const updatedProduct = await Product.findById(id);
//     res.status(200).json(updatedProduct);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// // Delete a product
// app.delete("/api/product/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const product = await Product.findByIdAndDelete(id);
//     if (!product) {
//       res.status(404).json("Product not found");
//     }
//     res.status(200).json("product deleted successfully");
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

mongoose
  .connect(
    "mongodb+srv://admin:pdalH60MEyDS7iXl@cluster1.ekb5z.mongodb.net/Node-API?retryWrites=true&w=majority&appName=Cluster1"
  )
  .then(() => {
    console.log("Connected to database");
  })
  .catch((err) => {
    console.log("Connection failed", err);
  });
