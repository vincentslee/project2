module.exports = function(sequelize, DataTypes) {
  const City = sequelize.define("City", {
    // The email cannot be null, and must be a proper email before creation
    city: {
      type: DataTypes.STRING,
      allowNull: false
    },
    life_quality: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    purchasing_power: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    safety:{
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    health_care: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    living_cost: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    prop_to_income_ratio: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    traffic: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    polution: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    climate: {
      type: DataTypes.DECIMAL,
      allowNull: false
    }
  });
  return City;
};
