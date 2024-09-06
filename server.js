import express from "express";
import { connectDB } from "./config/db.js";

import dotenv from "dotenv";
import Product from "./models/product.model.js";
dotenv.config();

const app = express();
app.use(express.json());

app.get("/", async (req, resp) => {
  resp.send("server is ready");
});

app.get("/api/products", async (req, resp) => {
  const products = await Product.find({});
  return resp.status(200).json({
    success: false,
    data: products,
  });
});

app.post("/api/products", async (req, resp) => {
  const product = req.body;
  console.log(req.body);
  if (!product || !product.name || !product.price || !product.image) {
    return resp.status(400).json({
      success: false,
      message: "please provide all fields",
    });
  }

  try {
    const newProduct = new Product(product);
    newProduct.save();
    resp.status(201).json({
      success: true,
      data: newProduct,
    });
  } catch (error) {
    console.log(`error creating product ${error}`);
    resp.status(500).json({
      success: true,
      message: `error creating product ${error}`,
    });
  }
});

app.listen(5000, async () => {
  await connectDB();
  console.log("server started at https://localhost:5000");
});
