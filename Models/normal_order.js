const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('normal_order', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    cart_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    delivery_address_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    restaurant_manager_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    phone: {
      type: DataTypes.STRING(13),
      allowNull: true
    },
    payment_info_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    promo_use_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    voucher_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    invoice_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    restaurant_review_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    estimated_time: {
      type: DataTypes.DATE,
      allowNull: false
    },
    status: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'normal_order',
    schema: 'public',
    timestamps: false
  });
};
