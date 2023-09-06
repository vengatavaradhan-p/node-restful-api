const Product = require('../models/product');

// Create
const create = async (body) => {
  try {
    const newProduct = new Product(body);
    const products = await newProduct.save();
    return products;
  } catch (error) {
    res.status(400).json({ error: 'Product creation failed' });
  }
};

// Read all
const getAll = async () => {
  try {
    const products = await Product.find();
    return products;
  } catch (error) {
    res.status(500).json({ error: 'Error while retrieving all products' });
  }
};

// Read by ID
const getById = async (id) => {
    try {
      const products = await Product.findById(id);
      return products;
    } catch (error) {
      res.status(500).json({ error: 'Error while retrieving product' });
    }
  };

// Update by ID
const update = async (id, body) => {
  try {
    const products = await Product.findByIdAndUpdate(
      id,
      body,
      { new: true }
    );
    return products;
  } catch (error) {
    res.status(400).json({ error: 'Error while updating product' });
  }
};

// Delete by ID
const drop = async (id) => {
  try {
    const products = await Product.findByIdAndRemove(id);
    return products;
  } catch (error) {
    res.status(400).json({ error: 'Failed to delete the product' });
  }
};

module.exports = { create, getAll, update, drop, getById };
