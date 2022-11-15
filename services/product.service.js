const Product = require("../models/Product");

exports.createServiceProcut = async (data) => {
  const result = await Product.create(data);
  return result;
};
