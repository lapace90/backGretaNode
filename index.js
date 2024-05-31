const { CoelhoJs, models } = require("coelhojs-core");

const myApp = new (class extends CoelhoJs {
  async bootstrap() {
    const { fakerFR: faker } = require("@faker-js/faker");

    const { Task, Project, User } = models;
    // on rempli la base de données
    let tasks = await Task.findAll();
    let users = await User.findAll();
    let projects = await Project.findAll();

    if (tasks.length < 25) {
      for (let i = 0; i < 25; i++) {
        await Task.create({
          name: faker.commerce.productAdjective(),
          description: faker.commerce.productDescription(),
          project_id: Math.floor(Math.random() * 20) + 1,
        });
      }
      for (let iP = 0; iP < 20; iP++) {
        await Project.create({
          name: faker.commerce.productName(),
          dateStart: faker.date.past(),
          dateEnd: faker.date.future(),
        });
      }

      if (users.length < 30) {
        for (let iP = 0; iP < 30; iP++) {
          await User.create({
            name: faker.person.fullName(),
          });
        }
      }
    }
  }

  initMiddlewares() {
    super.initMiddlewares();
    /*
     *
     * Feel free to add any middleware you want to use here. It will be added to the list of middleware already packed with CoelhoJs
     *
     */
  }

  serverStarted() {
    console.log(`Server started on ${this.config.app.severhost}`);
  }
})();

myApp.start(); // Start the application after initializing the database and setting associations
