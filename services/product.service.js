const Product = require("../models/Product");

exports.createServiceProduct = async (data) => {
  const result = await Product.create(data);
  return result;
};

exports.getProductService = async () => {
  const products = await Product.find({});
  return products;
};

exports.getProductServiceById = async (id) => {
  const productone = await Product.findById({ _id: id });
  return productone;
};

exports.updateProductById = async (ProductId, data) => {
  const updateProduct = await Product.updateOne(
    { _id: ProductId },
    { $set: data },
    { runValidators: true }
  );
  // return updateProduct;
};

exports.bulkUpdateService = async (data) => {
  /*   const result = await Product.updateMany({ _id: data.ids }, data.data, {
    runValidators: true,
  }); */
  const bulkproducts = [];
  data.ids.forEach((product) => {
    bulkproducts.push(Product.updateOne({ _id: product.id }, product.data));
  });
  const result = await Promise.all(bulkproducts);
  return result;
};

exports.deletProductServiceById = async (id) => {
  const deletedProduct = await Product.deleteOne({ _id: id });
  return deletedProduct;
};

exports.bulkDeleteProductService = async (ids) => {
  const bulkdelete = await Product.deleteMany({ _id: ids });
  return bulkdelete;
};
