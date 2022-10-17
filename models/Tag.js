const { Model, DataTypes } = require("sequelize");
// reeuire sequelize and make the connection to the configuration
const sequelize = require("../config/connection.js");

class Tag extends Model { }


Tag.init(
    {
        // this creates the id column, defined as an integer and is not allowed to be null
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        // this creates a column tag name, set as a string
        tag_name: {
            type: DataTypes.STRING
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: "tag",
        // sets our model to be named tag
    }
);
module.exports = Tag;
// export


