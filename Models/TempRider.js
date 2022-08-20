const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TempRider', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    order_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    rider_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'TempRider',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "TempRider_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
