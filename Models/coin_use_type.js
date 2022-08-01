const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('coin_use_type', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    admin_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'admin',
        key: 'id'
      }
    },
    available_data: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    coin_amount: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    voucher_amount: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'coin_use_type',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "coin_use_type_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
