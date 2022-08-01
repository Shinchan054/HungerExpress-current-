const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('item_review', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    item_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'item',
        key: 'id'
      }
    },
    order_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'orderr',
        key: 'id'
      }
    },
    rating: {
      type: DataTypes.REAL,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'item_review',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "item_review_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
