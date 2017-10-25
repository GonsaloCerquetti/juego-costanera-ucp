// import {Bonus} from './Bonus'
module JuegoCostanera {
    export class Fruta extends Bonus {
        emitterFrutas: Phaser.Particles.Arcade.Emitter
        fruta: Phaser.Sprite
        
        constructor(game: Phaser.Game, x: number, y: number,frame: string) {
            super(game, x, y, frame);

         
            var fruta = game.add.sprite(x, y, frame)
			this.setFruta(fruta);
			this.getFruta().name = frame;
			game.physics.enable(this.getFruta(), Phaser.Physics.ARCADE);
			//  This adjusts the collision body size.
			this.getFruta().body.setSize(10, 10, 0, 0);
                            
		    var emitter = game.add.emitter(game.world.centerX,game.world.top, 5);
			this.setEmitterFrutas(emitter);
			this.getEmitterFrutas().width = game.world.width;
			this.getEmitterFrutas().makeParticles(frame,null,1,true);
			this.getEmitterFrutas().setYSpeed(-100, 500);
			this.getEmitterFrutas().setXSpeed(-5, 5);
			this.getEmitterFrutas().start(false, 1600, 1, 0);
            //Para agregar el objeto al juego
            game.add.existing(this);
;


        }

        setEmitterFrutas(value: Phaser.Particles.Arcade.Emitter){
            this.emitterFrutas = value;
        }

        getEmitterFrutas(){
            return this.emitterFrutas;
        }

        setFruta(value: Phaser.Sprite){
            this.fruta = value;
        }

        getFruta(){
            return this.fruta;
        }
    }
}