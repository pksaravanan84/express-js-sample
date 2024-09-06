import express from "express";
import jwt from "jsonwebtoken";

const loginRoutes = express.Router();

loginRoutes.get("/", async (_, res) => {
  const secretKey = process.env.JWT_KEY || "secretkeyappearshere";
  console.log(secretKey);

  const token = jwt.sign(
    {
      userId: "pksaravanan.xp",
      email: "pksaravanan.xp@gmail.com",
    },
    secretKey,
    { expiresIn: "1h" }
  );

  res.status(200).json({
    success: true,
    data: {
      userId: "pksaravanan.xp",
      email: "pksaravanan.xp@gmail.com",
      token: token,
    },
  });
});

export default loginRoutes;
