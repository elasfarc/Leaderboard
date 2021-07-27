export default class Player {
  constructor({ name, age = 18, sex = undefined }) {
    if (!name) throw new Error('Name must be provided!');
    this.name = name;
    this.age = age;
    this.sex = sex;
  }
}