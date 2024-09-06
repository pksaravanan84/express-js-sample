import express from "express";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
import productRoutes from "./route/product.route.js";
import loginRoutes from "./route/login.route.js";

dotenv.config();

const app = express();
app.use(express.json());

app.get("/", async (req, resp) => {
  resp.send("server is ready");
});

app.use("/login", loginRoutes);
app.use("/api/products", productRoutes);

var port = process.env.LISTEN_PORT || 5001;
app.listen(port, async () => {
  try {
    await connectDB();
    console.log(`server started at https://localhost:${port}`);
  } catch (error) {
    console.log(`Error Connecting to MongoDB details- ${error}`);
  }
});
