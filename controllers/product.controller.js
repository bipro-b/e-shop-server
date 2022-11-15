const { createServiceProcut } = require("../services/product.service");

exports.createProduct = async (req, res, next) => {
  try {
    const result = await createServiceProcut(req.body);
    res.status(200).json({
      status: "Success",
      message: "succesfully created a product",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "Falis",
      message: "could not create product",
      error: error.message,
    });
  }
};
