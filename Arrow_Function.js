const person = {
  name: "Diksha",
  actions: ["bike", "hike", "ski"],
  printActions() {
    this.actions.forEach((action) => {
      console.log(this.name + " likes to " + action);
    });
  },
};

person.printActions();
