const {
  createServiceProduct,
  getProductService,
  getProductServiceById,
  updateProductById,
  bulkUpdateService,
} = require("../services/product.service");

exports.createProduct = async (req, res, next) => {
  try {
    const result = await createServiceProduct(req.body);
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

exports.getProduct = async (req, res, next) => {
  try {
    const products = await getProductService();
    res.status(200).json({
      status: "Success",
      message: "succesfully got a product",
      data: products,
    });
  } catch (error) {
    res.status(400).json({
      status: "Falis",
      message: "could not get product",
      error: error.message,
    });
  }
};

exports.getProductById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await getProductServiceById(id);
    res.status(200).json({
      status: "Success",
      message: "succesfully got a product",
      data: product,
    });
  } catch (error) {
    res.status(400).json({
      status: "Falis",
      message: "could not get product",
      error: error.message,
    });
  }
};

exports.updateProductById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updateProduct = await updateProductById(id, req.body);

    res.status(200).json({
      status: "Success",
      message: "succesfully updated a product",
    });
  } catch (error) {
    res.status(400).json({
      status: "Falis",
      message: "could not updated product",
      error: error.message,
    });
  }
};

exports.bulkUpdate = async (req, res, next) => {
  try {
    const bulkUpdate = await bulkUpdateService(req.body);
    /*  if (!bulkUpdate.modifiedCount) {
      return res.status(400).json({
        status: "fail",
        message: "Could not updated products",
        error: error.message,
      });
    } */
    res.status(200).json({
      status: "Success",
      message: "succesfully updated bulk product",
      data: bulkUpdate,
    });
  } catch (error) {
    res.status(400).json({
      status: "Falis",
      message: "could not updated bulk product",
      error: error.message,
    });
  }
};
