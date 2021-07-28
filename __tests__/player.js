/* eslint-disable no-new */

import Player from '../src/player.js';

describe('#Player', () => {
  describe('create a new player object', () => {
    it('creates a new Player object with the given name, age and sex', () => {
      const player = new Player({ name: 'john', age: 30, sex: 'male' });

      expect(player.name).toBe('john');
      expect(player.age).toBe(30);
      expect(player.sex).toBe('male');
    });

    it('throws an error if the player name is not provided', () => {
      expect(() => { new Player({ age: 19, sex: 'male' }); }).toThrow('Name must be provided!');
    });

    test('if player\'s age is omitted -> default age is 18', () => {
      const player1 = new Player({ name: 'john' });
      expect(player1.age).toBe(18);
    });
    test('if player\'s sex is omitted -> default sex is undefined', () => {
      const player1 = new Player({ name: 'john' });

      expect(player1.sex).toBe(undefined);
    });
  });
});