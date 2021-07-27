import Game from './game.js';

export default class {
    #storage

    constructor() {
      this.#storage = [];
    }

    get storage() {
      return this.#storage;
    }

    addGame(game) {
      if (!game || !(game instanceof Game)) throw new Error('game must be provided!');
      this.#storage.push(game);
      return game;
    }
}