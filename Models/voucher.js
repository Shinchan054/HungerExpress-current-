const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('voucher', {
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
    time: {
      type: DataTypes.DATE,
      allowNull: false
    },
    coin_history_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'coin_history',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'voucher',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "voucher_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
