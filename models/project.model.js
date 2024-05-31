const { sequelize, DataTypes } = require("coelhojs-core");

const Project = sequelize.define("Project", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  dateStart: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  dateEnd: {
    type: DataTypes.DATE,
    allowNull: true,
  },
});

module.exports = Project;
