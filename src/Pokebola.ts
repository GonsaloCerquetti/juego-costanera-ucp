// import {Bonus} from './Bonus'
module JuegoCostanera {
    export class Pokebola extends Bonus {
        emitterPokebolas: Phaser.Particles.Arcade.Emitter
        pokebola: Phaser.Sprite
        
        constructor(game: Phaser.Game, x: number, y: number,frame: string) {
            super(game, x, y, frame);

            var pokebola = game.add.sprite(x,y, frame)
			this.setPokebola(pokebola);
			this.getPokebola().name = frame;
			game.physics.enable(this.getPokebola(), Phaser.Physics.ARCADE);
			//  This adjusts the collision body size.
			this.getPokebola().body.setSize(10, 10, 0, 0);
                            
            var emitter = game.add.emitter(game.world.width,game.world.bottom - 100, 5);
			this.setEmitterPokebolas(emitter);
			this.getEmitterPokebolas().makeParticles(frame,null,1,true);
			this.getEmitterPokebolas().setYSpeed(-100, 0);
			this.getEmitterPokebolas().setXSpeed(-1000, -500);
			this.getEmitterPokebolas().gravity.y = 0;
			this.getEmitterPokebolas().start(false, 1600, 1, 0);
            //Para agregar el objeto al juego
            game.add.existing(this);

        }

        setEmitterPokebolas(value: Phaser.Particles.Arcade.Emitter){
            this.emitterPokebolas = value;
        }

        getEmitterPokebolas(){
            return this.emitterPokebolas;
        }

        setPokebola(value: Phaser.Sprite){
            this.pokebola = value;
        }

        getPokebola(){
            return this.pokebola;
        }
    }
}