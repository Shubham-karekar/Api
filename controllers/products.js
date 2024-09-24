// const { query } = require("express");
const Product = require("../models/product");

const getAllProducts = async (req, res) => {
  const { company, name, feacture, sort, select } = req.query;
  const queryObject = {};
  if (company) {
    queryObject.company = company;
  }
  if (feacture) {
    queryObject.feacture = feacture
  }
  if (name) {
    queryObject.name = { $regex: name, $option: "s"};
  }

  let apiData = Product.find(queryObject);
   
  if (sort) {
    let sortFix = sort.replace(",", " ");
    apiData = apiData.sort(sortFix);
  }
  if (select) {
    // let selectFix = select.replace(",", " ");
    let selectFix = select.split(","). join(" ");
    apiData = apiData.select(selectFix)
  }

  // let page =Number(req.query.page) || 1;
  // let limit = Number(req.query.limit) || 50;
  
  // let skip = (page -1) * limit;

  // apiData = apiData.skip(skip).limit(limit);

  console.log(queryObject);

  const myData = await apiData;
  res.status(200).json({ myData, nbHits: myData.length });
};
const getAllProductsTesting = async (req, res) => {
  const queryObject = await Product.find(req.query).sort("name -price").select("name company");
  
  res.status(200).json({ queryObject });
};

module.exports = { getAllProducts, getAllProductsTesting };

