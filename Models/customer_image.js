const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('customer_image', {
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
    link: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    time: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'customer_image',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "customer_image_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
