const express = require("express");
const { productController } = require("../../../controller");

const router = express.Router();

router.route("/").post(productController.createProduct);

router.route("/").get(productController.getAllProducts);

router.route("/:id").get(productController.getByIdProducts);

router.route("/:id").put(productController.updateProduct);

router.route("/:id").delete(productController.deleteProduct);

module.exports = router;
