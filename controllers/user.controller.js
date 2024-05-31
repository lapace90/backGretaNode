const { AbstractController, models } = require("coelhojs-core");

const { User } = models;

class UserController extends AbstractController {
    constructor() {
        super(
            User
            // add your model includes array
        );
    }
    /*
    *
    * Feel free to add all the methods you need here
    *
    */
}

module.exports = { UserController };
        