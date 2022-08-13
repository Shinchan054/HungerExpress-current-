const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('restaurant', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    location: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    rating: {
      type: DataTypes.REAL,
      allowNull: false
    },
    current_service_charge_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    restaurant_manager_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'restaurant_manager',
        key: 'id'
      }
    },
    address_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'restaurant',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "restaurant_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
