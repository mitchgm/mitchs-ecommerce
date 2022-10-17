// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  // sets the category id as the foreign key that goes through Category
  foreignKey: 'category_id'
});



// Categories have many Products
Category.hasMany(Product, {
  // sets the category id as the foreign key that goes through Product
  foreignKey: "category_id",
});



// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: ProductTag,
  // sets the product id as the foreign key that goes through Product
  foreginKey: "product_id",
});



// Tags belongToMany Products (through ProductTag)

Tag.belongsToMany(Product, {
  through: ProductTag,
  // sets the tag id as the foreign key that goes through Product
  foreignKey: "tag_id"
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
