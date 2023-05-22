const {Model, DataTypes} = require("sequelize");

const Sequelize = require("../config/db");

class User extends Model{};

User.init(
    {
        name: {
            type : DataTypes.STRING
        },
        email:{
            type: DataTypes.STRING
        },
        password:{
            type: DataTypes.STRING
        }
    },
    {
        Sequelize, modelName: "user"
    }
);

module.exports = User;
