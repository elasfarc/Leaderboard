import Game from './game.js';
import { post } from './services/api/utilities/provider.js';

export default class {
    #storage

    constructor(id) {
      this.uniqueID = id;
      this.#storage = [];
    }

    get storage() {
      return this.#storage;
    }

    async addGame(game) {
      if (!game || !(game instanceof Game)) throw new Error('game must be provided!');

      // prepare data to post && post
      const entryPoint = `games/${this.uniqueID}/scores/`;
      const data = { user: game.player.name, score: game.score };
      const { result } = await post({ entryPoint, data });

      this.#storage.push(game);
      return result;
    }
}
