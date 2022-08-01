const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('promo_use', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    promo_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'promo',
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
    time: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'promo_use',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "promo_use_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
