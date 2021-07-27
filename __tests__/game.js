import Game from '../src/game.js';
import Player from '../src/player.js'
describe('Game', ()=>{
    describe('create a new game object', ()=>{

        it('creates a new Player object with the given name, age and sex', () => {
            const playerJohn = new Player({name:'john'})
            const game = new Game({ player: playerJohn, score: 12 });
      
            expect(game.score).toBe(12);
            expect(game.player instanceof Player).toBe(true);
            expect(game.player.name).toBe('john');
          });

        test('player object must be provided', ()=>{
            expect(()=>{new Game({score:22})}).toThrow('player object must be provided!')
            expect(()=>{new Game({player:'some player', score:22})}).toThrow('player object must be provided!')
        })
    })
})