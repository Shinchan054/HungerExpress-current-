const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('rest_address', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    longitude: {
      type: DataTypes.REAL,
      allowNull: false
    },
    latitude: {
      type: DataTypes.REAL,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'rest_address',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "rest_address_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
