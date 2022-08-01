const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cart_item_addon', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    cart_item_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'cart_item',
        key: 'id'
      }
    },
    addon_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'addon',
        key: 'id'
      }
    },
    total_price: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    count: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'cart_item_addon',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "cart_item_addon_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
