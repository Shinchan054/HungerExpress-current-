const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('state', {
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
    description: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    time: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'state',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "state_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
