const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('restaurant_address', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    restaurant_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'restaurant',
        key: 'id'
      }
    },
    location: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    block: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    road: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    house: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    apartment: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    postal_code: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    start: {
      type: DataTypes.DATE,
      allowNull: false
    },
    finish: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'restaurant_address',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "restaurant_address_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
