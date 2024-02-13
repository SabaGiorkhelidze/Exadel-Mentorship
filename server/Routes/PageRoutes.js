// import express from "express";
// import { Product } from '../Models/ProductModel'
const prod = require("../Models/ProductModel");
const express = require('express')
const PagesRouter = express.Router();

PagesRouter.post("/", async (req, res) => {
  try {
    const newProduct = await Product.create(req.body);
    res
      .status(201)
      .json({ message: "Product created successfully!", product: newProduct });
  } catch (err) {
    console.error("Error creating product:", err);
    res.status(500).json({ message: "Server error occurred" });
  }
});

module.exports = { PagesRouter };
