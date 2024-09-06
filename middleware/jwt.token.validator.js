import jwt from "jsonwebtoken";

const authenticate = async (req, res, next) => {
  console.log(req.headers);
  const token = req.headers.authorization?.split(" ")[1];
  console.log(`token is ${token}`);
  //Authorization: 'Bearer TOKEN'
  if (!token) {
    res.status(401).json({
      success: false,
      message: "Error!Token was not provided.",
    });
  }
  const secretKey = process.env.JWT_KEY || "secretkeyappearshere";
  console.log(`secretKey is ${secretKey}`);
  //Decoding the token
  try {
    const decodedToken = jwt.verify(token, secretKey);
    next();
  } catch (error) {
    res.status(401).json({
      success: false,
      message: "invalid token",
      error: error,
    });
  }
};

export default authenticate;
