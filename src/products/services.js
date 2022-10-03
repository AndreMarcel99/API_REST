const { ObjectId } = require("mongodb");
const { Database } = require("../database/index");
const { ProductsUtils } = require("./utils");

const COLLECTION = "products";

const getAll = async () => {
  const collection = await Database("COLLECTION");
  return await collection.find({}).toArray();
};

const getById = async (id) => {
  const collection = await Database("COLLECTION");
  return await collection.findOne({ _id: ObjectId(id) });
};

const create = async (product) => {
  const collection = await Database("COLLECTION");
  let result = await collection.insertOne(product);
  return result.insertedId;
};
//upadate
//delete

const generatereport = async (name, res) => {
  let products = await getAll();
  ProductsUtils.excelGenerator(products, name, res);
};

module.exports.ProductsServices = {
  getAll,
  getById,
  create,
  generatereport,
};
