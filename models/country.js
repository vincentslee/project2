module.exports = function(sequelize, DataTypes) {
const Country = sequelize.define("Country", {
    Country: {
      type: DataTypes.STRING,
      allowNull: false
    },
    score: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    gdp: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    social_support:{
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    life_expectancy: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    freedom: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    generosity: {
      type: DataTypes.DECIMAL,
      allowNull: false
    }
  });
  return City;
};
