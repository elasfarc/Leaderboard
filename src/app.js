import { post } from './services/api/utilities/provider.js';

export default class App {
    #storage

    constructor() {
      this.#storage = JSON.parse(localStorage.getItem('boards')) || [];
      this.isFirstTime = this.#storage.length === 0;
    }

    get storage() {
      return this.#storage;
    }

    async addLeaderBoard(name) {
      const entryPoint = 'games/';
      const data = { name };
      const { result } = await post({ entryPoint, data });
      const id = result.substr(14, 20);
      this.#storage.push({ id, name });
      this.updateLocalStorage();
    }

    updateLocalStorage() {
      localStorage.setItem('boards', JSON.stringify(this.#storage));
    }
}