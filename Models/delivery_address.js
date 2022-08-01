const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('delivery_address', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
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
    order_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'orderr',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'delivery_address',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "delivery_address_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
