const express = require("express");
const verificarAdmin = require("../middlewares/adminMiddleware.js")

const productController = require("../controllers/productController.js");
const authMiddleware = require("../middlewares/authMiddleware.js");

const router = express.Router();

router.get("/produtos", productController.listarProdutos);

router.get("/produtos/:id", productController.buscarProdutoPorId);

router.post("/produtos", authMiddleware, verificarAdmin, productController.criarProduto);

router.put("/produtos/:id", authMiddleware, verificarAdmin, productController.atualizarProduto);

router.delete("/produtos/:id", authMiddleware, verificarAdmin, productController.deletarProduto);

module.exports = router;