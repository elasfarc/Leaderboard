import LeaderBoard from '../src/leaderboard.js';
import Game from '../src/game.js';
import Player from '../src/player.js';

describe('LeaderBoard', () => {
  describe('create a new leaderboard object', () => {
    test('every leaderboard object has it\'s own storage', () => {
      const leaderboard = new LeaderBoard();

      expect(leaderboard.storage).toEqual(expect.arrayContaining([]));
    });
  });
  describe('#addGame', () => {
    describe('when a game object is provided', () => {
      const playerJohn = new Player({ name: 'john' });
      const game = new Game({ player: playerJohn, score: 14 });
      const leaderboard = new LeaderBoard();

      it('adds the game object to the storage', () => {
        leaderboard.addGame(game);

        expect(leaderboard.storage.length).toBe(1);
        expect(leaderboard.storage[0].player.name).toBe('john');
        expect(leaderboard.storage[0].score).toBe(14);
      });
      it('returns the provided game object', () => {
        expect(leaderboard.addGame(game)).toEqual(game);
      });
    });
    describe('when NO game object is provided', () => {
      it('throws an error', () => {
        const leaderboard = new LeaderBoard();
        expect(() => { leaderboard.addGame(); }).toThrow('game must be provided!');
        expect(() => { leaderboard.addGame('fake game object'); }).toThrow('game must be provided!');
      });
    });
  });
});