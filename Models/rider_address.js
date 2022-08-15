const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('rider_address', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    longitude: {
      type: DataTypes.REAL,
      allowNull: true
    },
    latitude: {
      type: DataTypes.REAL,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'rider_address',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "rider_address_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
