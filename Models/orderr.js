const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('orderr', {
    id: {
      autoIncrement: true,
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
    delivery_address_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'delivery_address',
        key: 'id'
      }
    },
    restaurant_manager_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'restaurant_manager',
        key: 'id'
      }
    },
    phone: {
      type: DataTypes.STRING(13),
      allowNull: false
    },
    status: {
      type: DataTypes.STRING(13),
      allowNull: true
    },
    payment_info_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'payment_info',
        key: 'id'
      }
    },
    promo_use_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'promo_use',
        key: 'id'
      }
    },
    voucher_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'voucher',
        key: 'id'
      }
    },
    invoice_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'invoice',
        key: 'id'
      }
    },

    restaurant_review_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'restaurant_review',
        key: 'id'
      }
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
