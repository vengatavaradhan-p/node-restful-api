const { Product } = require("../services");

// Create
const createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json({ status: true, message: 'Product created successfully', data: product });
  } catch (error) {
    res.status(400).json({ error: 'Product creation failed' });
  }
};

// Get all
const getAllProducts = async (req, res) => {
  try {
    const product = await Product.getAll(req);
    res.status(200).json({ status: true, message: 'All product retrieved', data: product});
  } catch (error) {
    res.status(500).json({ error: 'Error while retrieving all products' });
  }
};

// Get by ID
const getByIdProducts = async (req, res) => {
  try {
    const product = await Product.getById(req.params.id);
    res.status(200).json({ status: true, message: 'Product retrieved', data: product});
  } catch (error) {
    res.status(500).json({ error: 'Error while retrieving product' });
  }
};

// Update by ID
const updateProduct = async (req, res) => {
  try {
    const product = await Product.update(
      req.params.id,
      req.body
    );
    res.status(200).json({ status: true, message: 'Product updated successfully', data: product});
  } catch (error) {
    res.status(400).json({ error: 'Error while updating product' });
  }
};

// Delete by ID
const deleteProduct = async (req, res) => {
  try {
    await Product.drop(req.params.id);
    res.status(204).send({ status: true, message: 'Product deleted successfully'});
  } catch (error) {
    res.status(400).json({ error: 'Failed to delete the product' });
  }
};

module.exports = { createProduct, getAllProducts, getByIdProducts, updateProduct, deleteProduct };
