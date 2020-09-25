module.exports = function(sequelize, DataTypes) {
  const City = sequelize.define("City", {
    city: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lifeQuality: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    purchasingPower: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    safety: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    healthCare: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    livingCost: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    propToIncomeRatio: {
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
