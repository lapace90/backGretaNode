const { models } = require("coelhojs-core");
const { Project, Task, User } = models;

module.exports = {
  setAssociations: () => {
      Project.hasMany(Task, { foreignKey: "project_id", as: "tasks" });
      Task.belongsTo(Project, { foreignKey: "project_id", as: "project" });

    
      Task.belongsToMany(User, { through: "User_Task", foreignKey: "task_id", as: "users" });
      User.belongsToMany(Task, { through: "User_Task", foreignKey: "user_id", as: "tasks" });
  },
};
