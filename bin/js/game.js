var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// /// <reference path="../tsDefinitions/phaser.d.ts" />
var JuegoCostanera;
(function (JuegoCostanera) {
    var Bonus = /** @class */ (function (_super) {
        __extends(Bonus, _super);
        function Bonus() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return Bonus;
    }(Phaser.Sprite));
    JuegoCostanera.Bonus = Bonus;
})(JuegoCostanera || (JuegoCostanera = {}));
// /// <reference path="../tsDefinitions/phaser.d.ts" />
var JuegoCostanera;
(function (JuegoCostanera) {
    var Personaje = /** @class */ (function (_super) {
        __extends(Personaje, _super);
        function Personaje(game, x, y, frame) {
            var _this = _super.call(this, game, x, y, frame) || this;
            _this.height = 200;
            _this.width = 100;
            game.physics.enable(_this, Phaser.Physics.ARCADE);
            _this.body.collideWorldBounds = true;
            _this.body.gravity.y = 500;
            _this.body.setSize(844, 1254);
            _this.setOrientacion('right');
            _this.setPuntos(0);
            _this.setPuntosB(0);
            _this.setVidas(3);
            game.add.existing(_this);
            return _this;
        }
        Personaje.prototype.getPuntosB = function () {
            return this.puntosBonus;
        };
        Personaje.prototype.setPuntosB = function (value) {
            this.puntosBonus = value;
        };
        Personaje.prototype.getPuntos = function () {
            return this.puntos;
        };
        Personaje.prototype.setPuntos = function (value) {
            this.puntos = value;
        };
        Personaje.prototype.getVidas = function () {
            return this.vidas;
        };
        Personaje.prototype.setVidas = function (value) {
            this.vidas = value;
        };
        Personaje.prototype.setOrientacion = function (value) {
            this.orientacion = value;
        };
        Personaje.prototype.getOrientacion = function () {
            return this.orientacion;
        };
        return Personaje;
    }(Phaser.Sprite));
    JuegoCostanera.Personaje = Personaje;
})(JuegoCostanera || (JuegoCostanera = {}));
// import {Bonus} from './Bonus'
var JuegoCostanera;
(function (JuegoCostanera) {
    var Pokebola = /** @class */ (function (_super) {
        __extends(Pokebola, _super);
        function Pokebola(game, x, y, frame) {
            var _this = _super.call(this, game, x, y, frame) || this;
            var pokebola = game.add.sprite(x, y, frame);
            _this.setPokebola(pokebola);
            _this.getPokebola().name = frame;
            game.physics.enable(_this.getPokebola(), Phaser.Physics.ARCADE);
            //  This adjusts the collision body size.
            _this.getPokebola().body.setSize(10, 10, 0, 0);
            var emitter = game.add.emitter(game.world.width, game.world.bottom - 100, 5);
            _this.setEmitterPokebolas(emitter);
            _this.getEmitterPokebolas().makeParticles(frame, null, 1, true);
            _this.getEmitterPokebolas().setYSpeed(-100, 0);
            _this.getEmitterPokebolas().setXSpeed(-1000, -500);
            _this.getEmitterPokebolas().gravity.y = 0;
            _this.getEmitterPokebolas().start(false, 1600, 1, 0);
            //Para agregar el objeto al juego
            game.add.existing(_this);
            return _this;
        }
        Pokebola.prototype.setEmitterPokebolas = function (value) {
            this.emitterPokebolas = value;
        };
        Pokebola.prototype.getEmitterPokebolas = function () {
            return this.emitterPokebolas;
        };
        Pokebola.prototype.setPokebola = function (value) {
            this.pokebola = value;
        };
        Pokebola.prototype.getPokebola = function () {
            return this.pokebola;
        };
        return Pokebola;
    }(JuegoCostanera.Bonus));
    JuegoCostanera.Pokebola = Pokebola;
})(JuegoCostanera || (JuegoCostanera = {}));
// import {Bonus} from './Bonus'
var JuegoCostanera;
(function (JuegoCostanera) {
    var Fruta = /** @class */ (function (_super) {
        __extends(Fruta, _super);
        function Fruta(game, x, y, frame) {
            var _this = _super.call(this, game, x, y, frame) || this;
            var fruta = game.add.sprite(x, y, frame);
            _this.setFruta(fruta);
            _this.getFruta().name = frame;
            game.physics.enable(_this.getFruta(), Phaser.Physics.ARCADE);
            //  This adjusts the collision body size.
            _this.getFruta().body.setSize(10, 10, 0, 0);
            var emitter = game.add.emitter(game.world.centerX, game.world.top, 5);
            _this.setEmitterFrutas(emitter);
            _this.getEmitterFrutas().width = game.world.width;
            _this.getEmitterFrutas().makeParticles(frame, null, 1, true);
            _this.getEmitterFrutas().setYSpeed(-100, 500);
            _this.getEmitterFrutas().setXSpeed(-5, 5);
            _this.getEmitterFrutas().start(false, 1600, 1, 0);
            //Para agregar el objeto al juego
            game.add.existing(_this);
            ;
            return _this;
        }
        Fruta.prototype.setEmitterFrutas = function (value) {
            this.emitterFrutas = value;
        };
        Fruta.prototype.getEmitterFrutas = function () {
            return this.emitterFrutas;
        };
        Fruta.prototype.setFruta = function (value) {
            this.fruta = value;
        };
        Fruta.prototype.getFruta = function () {
            return this.fruta;
        };
        return Fruta;
    }(JuegoCostanera.Bonus));
    JuegoCostanera.Fruta = Fruta;
})(JuegoCostanera || (JuegoCostanera = {}));
/// <reference path="../tsDefinitions/phaser.d.ts" />
/// <reference path="./Personaje.ts" />
/// <reference path="./Pokebola.ts" />
/// <reference path="./Fruta.ts" />
/// <reference path="./Bonus.ts" />
var JuegoCostanera;
(function (JuegoCostanera) {
    var Costanera = /** @class */ (function () {
        function Costanera(ancho, alto) {
            this.setGame(new Phaser.Game(ancho, alto, Phaser.CANVAS, 'content', {
                preload: this.preload,
                create: this.create,
                update: this.update,
                setGame: this.setGame,
                getGame: this.getGame,
                setAncho: this.setAncho,
                getAncho: this.getAncho,
                setAlto: this.setAlto,
                getAlto: this.getAlto,
                setPersonaje: this.setPersonaje,
                getPersonaje: this.getPersonaje,
                setPokebola: this.setPokebola,
                getPokebola: this.getPokebola,
                setFruta: this.setFruta,
                getFruta: this.getFruta,
                setCursores: this.setCursores,
                getCursores: this.getCursores,
                setSaltarBtn: this.setSaltarBtn,
                getSaltarBtn: this.getSaltarBtn,
                collisionPokebola: this.collisionPokebola,
                collisionFruta: this.collisionFruta,
                listener: this.listener,
                getDobleSalto: this.getDobleSalto,
                setDobleSalto: this.setDobleSalto,
                setBajarBtn: this.setBajarBtn,
                getBajarBtn: this.getBajarBtn,
                getTextoPuntos: this.getTextoPuntos,
                setTextoPuntos: this.setTextoPuntos,
                getTextoVidas: this.getTextoVidas,
                setTextoVidas: this.setTextoVidas
            }));
        }
        //--	------------------setters y getters --------------------------------------
        Costanera.prototype.setGame = function (game) {
            this.game = game;
        };
        Costanera.prototype.getGame = function () {
            return this.game;
        };
        Costanera.prototype.setAncho = function (ancho) {
            this.ancho = ancho;
        };
        Costanera.prototype.getAncho = function () {
            return this.ancho;
        };
        Costanera.prototype.setAlto = function (alto) {
            this.alto = alto;
        };
        Costanera.prototype.getAlto = function () {
            return this.alto;
        };
        Costanera.prototype.setPersonaje = function (personaje) {
            this.personaje = personaje;
        };
        Costanera.prototype.getPersonaje = function () {
            return this.personaje;
        };
        Costanera.prototype.setPokebola = function (value) {
            this.pokebola = value;
        };
        Costanera.prototype.getPokebola = function () {
            return this.pokebola;
        };
        Costanera.prototype.setFruta = function (value) {
            this.fruta = value;
        };
        Costanera.prototype.getFruta = function () {
            return this.fruta;
        };
        Costanera.prototype.setCursores = function (cursores) {
            this.cursores = cursores;
        };
        Costanera.prototype.getCursores = function () {
            return this.cursores;
        };
        Costanera.prototype.setSaltarBtn = function (saltarBtn) {
            this.saltarBtn = saltarBtn;
        };
        Costanera.prototype.getSaltarBtn = function () {
            return this.saltarBtn;
        };
        Costanera.prototype.getDobleSalto = function () {
            return this.dobleSalto;
        };
        Costanera.prototype.setDobleSalto = function (valor) {
            this.dobleSalto = valor;
        };
        Costanera.prototype.setBajarBtn = function (valor) {
            this.bajarBtn = valor;
        };
        Costanera.prototype.getBajarBtn = function () {
            return this.bajarBtn;
        };
        Costanera.prototype.getTextoPuntos = function () {
            return this.textoPuntos;
        };
        Costanera.prototype.setTextoPuntos = function (value) {
            this.textoPuntos = value;
        };
        Costanera.prototype.getTextoVidas = function () {
            return this.textoVidas;
        };
        Costanera.prototype.setTextoVidas = function (value) {
            this.textoVidas = value;
        };
        Costanera.prototype.preload = function () {
            // add our logo image to the assets class under the
            // key 'logo'. We're also setting the background colour
            // so it's the same as the background colour in the image
            this.getGame().load.image('pokebola', 'assets/pokebola.png');
            this.getGame().load.image('bonus', 'assets/fruta.png');
            this.getGame().load.image('player', 'assets/pikachu.png');
            this.getGame().load.image('costanera', "assets/costanera.jpg");
            this.getGame().load.image('gameover', "assets/gameover.png");
        };
        Costanera.prototype.create = function () {
            //Seteamos la imagen del juego en la posicion '0,0'
            //y el ancho y alto de la misma según el tamaño de la ventana actual
            var logo = this.getGame().add.sprite(this.getGame().world.centerX, this.getGame().world.centerY, 'costanera');
            logo.x = 0;
            logo.y = 0;
            logo.height = this.getGame().height;
            logo.width = this.getGame().width;
            this.getGame().physics.startSystem(Phaser.Physics.ARCADE);
            this.getGame().time.desiredFps = 30;
            this.getGame().physics.arcade.gravity.y = 250;
            //Personaje
            var personaje = new JuegoCostanera.Personaje(this.getGame(), this.getGame().world.centerX, this.getGame().world.top, 'player');
            this.setPersonaje(personaje);
            //pokebola
            var pokebola = new JuegoCostanera.Pokebola(this.getGame(), 300, 50, 'pokebola');
            this.setPokebola(pokebola);
            this.getGame().physics.enable(this.getPokebola(), Phaser.Physics.ARCADE);
            //Fruta
            var fruta = new JuegoCostanera.Fruta(this.getGame(), 300, 50, 'bonus');
            this.setFruta(fruta);
            fruta.name = 'bonus';
            this.getGame().physics.enable(fruta, Phaser.Physics.ARCADE);
            //Click event
            logo.inputEnabled = true;
            logo.events.onInputDown.add(this.listener, this);
            this.setCursores(this.getGame().input.keyboard.createCursorKeys());
            this.setSaltarBtn(this.getGame().input.keyboard.addKey(Phaser.Keyboard.SPACEBAR));
            this.setBajarBtn(this.getGame().input.keyboard.addKey(Phaser.Keyboard.B));
            //  Puntos
            var scoreString = 'Puntos: ';
            var scoreText = this.getGame().add.text(10, 10, scoreString + this.getPersonaje().getPuntos(), { font: '34px Arial', fill: '#fff' });
            this.setTextoPuntos(scoreText);
            //  Vidas
            var vidasString = 'Vidas: ';
            var vidasText = this.getGame().add.text(this.getGame().world.width - 140, 10, vidasString + this.getPersonaje().getVidas(), { font: '34px Arial', fill: '#fff' });
            this.setTextoVidas(vidasText);
        };
        Costanera.prototype.update = function () {
            this.getGame().physics.arcade.collide(this.getPokebola().getEmitterPokebolas(), this.getPersonaje(), this.collisionPokebola, null, this);
            this.getGame().physics.arcade.collide(this.getFruta().getEmitterFrutas(), this.getPersonaje(), this.collisionFruta, null, this);
            this.getPersonaje().body.velocity.x = 0;
            if (this.getCursores().left.isDown) {
                this.getPersonaje().body.velocity.x = -500;
                if (this.getPersonaje().getOrientacion() != 'left') {
                    this.getPersonaje().animations.play('left');
                    this.getPersonaje().setOrientacion('left');
                }
            }
            else if (this.getCursores().right.isDown) {
                this.getPersonaje().body.velocity.x = 500;
                if (this.getPersonaje().getOrientacion() != 'right') {
                    this.getPersonaje().animations.play('right');
                    this.getPersonaje().setOrientacion('right');
                }
            }
            else {
                if (this.getPersonaje().getOrientacion() != 'idle') {
                    this.getPersonaje().animations.stop();
                    if (this.getPersonaje().getOrientacion() == 'left') {
                        this.getPersonaje().frame = 0;
                    }
                    else {
                        this.getPersonaje().frame = 5;
                    }
                    this.getPersonaje().setOrientacion('idle');
                }
            }
            if (this.getSaltarBtn().isDown && this.getPersonaje().body.onFloor()) {
                this.getPersonaje().body.velocity.y = -400;
                this.setDobleSalto(1);
                this.getSaltarBtn().isDown = false;
                console.log(this.getSaltarBtn(), "Primer Salto");
            }
            if (this.getSaltarBtn().isDown && this.getDobleSalto() == 1) {
                this.getPersonaje().body.velocity.y = -400;
                this.setDobleSalto(2);
                this.getSaltarBtn().isDown = false;
                console.log(this.getDobleSalto, "Segundo salto");
            }
            if (this.getBajarBtn().isDown && (this.getPersonaje().body || this.getPersonaje().body.touching.down)) {
                this.getPersonaje().body.velocity.y = 800;
            }
            if (this.getPersonaje().getVidas() == 0) {
                this.getPersonaje().body.collideWorldBounds = false;
                this.getGame().time.events.repeat(Phaser.Timer.SECOND + 2000, 0, this.personajeDie, this);
                //GAMEOVER
                var gameOverText = this.getGame().add.image(this.getGame().world.centerX - 130, this.getGame().world.centerY - 125, 'gameover');
            }
        };
        Costanera.prototype.personajeDie = function () {
            this.getPersonaje().exists = false;
        };
        Costanera.prototype.collisionPokebola = function (pokebola, personaje) {
            pokebola.kill();
            personaje.kill();
            //  Reduce the lives
            this.getPersonaje().setVidas(this.getPersonaje().getVidas() - 1);
            this.getTextoVidas().text = "Vidas: " + this.getPersonaje().getVidas().toString();
            this.getPersonaje().setPuntosB(0);
        };
        Costanera.prototype.collisionFruta = function (fruta, personaje) {
            personaje.kill();
            //  Increase the score
            this.getPersonaje().setPuntos(this.getPersonaje().getPuntos() + 20);
            this.getPersonaje().setPuntosB(this.getPersonaje().getPuntosB() + 20);
            this.getTextoPuntos().text = "Puntos: " + this.getPersonaje().getPuntos().toString();
            if (this.getPersonaje().getPuntosB() == 200) {
                this.getPersonaje().setVidas(this.getPersonaje().getVidas() + 1);
                this.getTextoVidas().text = "Vidas: " + this.getPersonaje().getVidas().toString();
                this.getPersonaje().setPuntosB(0);
            }
        };
        Costanera.prototype.listener = function () {
            this.getPersonaje().revive();
        };
        return Costanera;
    }());
    JuegoCostanera.Costanera = Costanera;
    // when the page has finished loading, create our game
    window.onload = function () {
        var game = new Costanera(window.innerWidth, window.innerHeight);
    };
})(JuegoCostanera || (JuegoCostanera = {}));
