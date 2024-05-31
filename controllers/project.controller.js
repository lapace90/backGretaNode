const { AbstractController, models } = require("coelhojs-core");

const { Project } = models;

class ProjectController extends AbstractController {
  constructor() {
    super(Project, ["tasks"]);
  }
  /*
   *
   * Feel free to add all the methods you need here
   *
   */
}

module.exports = { ProjectController };
