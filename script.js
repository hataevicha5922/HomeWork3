// console.log('Hello world!');

class Human {
  constructor(name, surname, age) {
    this.name = name;
    this.surname = surname;
    this.age = age;
  }

  getFullName() {
    return `${this.name}  ${this.surname}`;
  }
}

class Worker extends Human {
  #rate;
  #days;
  constructor(name, surname, age, rate, days) {
    super(name, surname, age);
    this.#rate = rate;
    this.#days = days;
  }

  getSallary() {
    return this.#rate * this.#days;
  }
}

class Developer extends Human {
  #sphere;
  #company;

  constructor(name, surname, age, sphere, company) {
    super(name, surname, age);
    this.#sphere = sphere;
    this.#company = company;
  }
  getFullName() {
    return `Hello ${this.name} ${this.surname}`;
  }

  getFullInfo() {
    return `${this.name} work in ${this.#company}`;
  }
}

class Disegner extends Human {
  #platform;
  #environment;

  constructor(name, surname, age, platform, environment) {
    super(name, surname, age);
    this.#platform = platform;
    this.#environment = environment;
  }

  getInfoAboutDDisegner() {
    return `${this.name} use ${this.#platform} for work`;
  }
}

// let human = new Human('Petr', 'Petrov', 37);
// console.log(human.name);

// let worker = new Worker('Leo', 'Sidoriv', 33, 200, 22);
// console.log(worker.getFullName());

// let dev = new Developer('Ivan', 'Ivanov', 30, 'FrontEnd', 'Google');
// console.log(dev.getFullInfo());

let disegner = new Disegner('Lena', 'Petrova', 27, 'Photosho', 'Dev');
console.log(disegner.getInfoAboutDDisegner());
