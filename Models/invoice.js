const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('invoice', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    order_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'orderr',
        key: 'id'
      }
    },
    vat_amount: {
      type: DataTypes.REAL,
      allowNull: false
    },
    delivery_fee: {
      type: DataTypes.REAL,
      allowNull: false
    },
    total_price: {
      type: DataTypes.REAL,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'invoice',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "invoice_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
