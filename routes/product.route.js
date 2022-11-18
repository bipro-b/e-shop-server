const express = require("express");
const router = express.Router();

const productController = require("../controllers/product.controller");

router
  .route("/")
  .post(productController.createProduct)
  .get(productController.getProduct);

router.route("/bulk-update").patch(productController.bulkUpdate);
router.route("/bulk-delete").delete(productController.bulkDeleteProduct);

router
  .route("/:id")
  .get(productController.getProductById)
  .patch(productController.updateProductById)
  .delete(productController.deleteProductById);

module.exports = router;
