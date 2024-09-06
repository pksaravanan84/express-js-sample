import express from "express";
import { getProducts, addProducts } from "../controllers/product.controller.js";
import authenticate from "../middleware/jwt.token.validator.js";

const productRoutes = express.Router();

productRoutes.get("/", authenticate, getProducts);

productRoutes.post("/", authenticate, addProducts);

export default productRoutes;
