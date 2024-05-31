const { AbstractController, models } = require("coelhojs-core");

const { Task } = models;

class TaskController extends AbstractController {
    constructor() {
        super(
            Task,
            ["users"]
            
        );
    }
    /*
    *
    * Feel free to add all the methods you need here
    *
    */
}

module.exports = { TaskController };
        