const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model { }

ProductTag.init(
  {
    // this defines the id for this column
    id: {
      type: DataTypes.INTEGER,
      // makes the data type an integer
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    // this defines the product id for column 
    product_id: {
      type: DataTypes.INTEGER,
      // makes the data type an integer, sets the model and key
      references: {
        model: "product",
        key: "id"
      }
    },
    // this defines the tag id for this column
    tag_id: {
      type: DataTypes.INTEGER,
      // makes the data type an integer, sets the model and key
      references: {
        model: "tag",
        key: "id"
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
