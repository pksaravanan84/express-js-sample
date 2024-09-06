import Product from "../models/product.model.js";

export const addProducts = async (req, resp) => {
  const product = req.body;

  if (!product || !product.name || !product.price || !product.image) {
    return resp
      .status(400)
      .json({ success: false, message: "please provide all fields" });
  }

  try {
    const newProduct = new Product(product);
    newProduct.save();
    resp.status(201).json({ success: true, data: newProduct });
  } catch (error) {
    console.log(`error creating product ${error}`);
    resp
      .status(500)
      .json({ success: true, message: `error creating product ${error}` });
  }
};

export const getProducts = async (_, resp) => {
  try {
    const products = await Product.find({});
    return resp.status(200).json({
      success: true,
      data: products,
    });
  } catch (e) {
    return resp.status(500).json({
      success: false,
      msg: "error occured",
      error: e,
    });
  }
};
