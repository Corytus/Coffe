'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Recipe extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Recipe.belongsTo(models.User);
    }
  };
  Recipe.init({
    method: DataTypes.STRING,
    dose: DataTypes.FLOAT,
    water: DataTypes.FLOAT,
    title: DataTypes.STRING,
    recipe: DataTypes.STRING,
    note: DataTypes.STRING,
    userName: DataTypes.STRING,
    userId: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Recipe',
  });
  return Recipe;
};