const Product = require("../models/product");

// Create
const create = async (body) => {
  try {
    const newProduct = new Product(body);
    const products = await newProduct.save();
    return products;
  } catch (error) {
    res.status(400).json({ error: "Product creation failed" });
  }
};

// Read all
const getAll = async (req) => {
  const pageNo = Number(req.query.page || 1);
  const perPage = req.query.pagePer || 10;
  const { search, minPrice, maxPrice } = req.query;
  try {
    const filter = {};
    const skip = (pageNo - 1) * perPage;
    const recordsPerPage = Number(perPage);
    if (search) {
      filter.name = { $regex: search, $options: "i" };
    }
    if (minPrice && maxPrice) {
      filter.price = { $gte: minPrice, $lte: maxPrice };
    } else if (minPrice) {
      filter.price = { $gte: minPrice };
    } else if (maxPrice) {
      filter.price = { $lte: maxPrice };
    }
    const products = await Product.find(filter)
      .skip(skip)
      .limit(recordsPerPage)
      .exec();
    const totalRecords = await Product.countDocuments();
    const totalPages = Math.ceil(totalRecords / perPage);
    return { products, pageNo, recordsPerPage, totalRecords, totalPages };
  } catch (error) {
    res.status(500).json({ error: "Error while retrieving all products" });
  }
};

// Read by ID
const getById = async (id) => {
  try {
    const products = await Product.findById(id);
    return products;
  } catch (error) {
    res.status(500).json({ error: "Error while retrieving product" });
  }
};

// Update by ID
const update = async (id, body) => {
  try {
    const products = await Product.findByIdAndUpdate(id, body, { new: true });
    return products;
  } catch (error) {
    res.status(400).json({ error: "Error while updating product" });
  }
};

// Delete by ID
const drop = async (id) => {
  try {
    const products = await Product.findByIdAndRemove(id);
    return products;
  } catch (error) {
    res.status(400).json({ error: "Failed to delete the product" });
  }
};

module.exports = { create, getAll, update, drop, getById };
