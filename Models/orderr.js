const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('orderr', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    cart_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'cart',
        key: 'id'
      }
    },
    restaurant_manager_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'restaurant_manager',
        key: 'id'
      }
    },
    status: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    rider_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Order_time: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Delivery_time: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'orderr',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "orderr_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
