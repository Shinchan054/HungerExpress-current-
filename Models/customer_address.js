const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('customer_address', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    customer_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'customer',
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
      type: DataTypes.STRING(20),
      allowNull: false
    },
    finish: {
      type: DataTypes.STRING(20),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'customer_address',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "customer_address_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
