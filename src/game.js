import Player from './player.js';

export default class Game {
    constructor({player, score}){
        if(!player || !(player instanceof Player)) throw new Error('player object must be provided!')
        this.player = player;
        this.score = score;
    }
}