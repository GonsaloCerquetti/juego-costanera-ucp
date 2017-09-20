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
/// <reference path="../tsDefinitions/phaser.d.ts" />
var Costanera = /** @class */ (function () {
    function Costanera(ancho, alto) {
        // create our phaser game
        // 800 - width
        // 600 - height
        // Phaser.AUTO - determine the renderer automatically (canvas, webgl)
        // 'content' - the name of the container to add our game to
        // { preload:this.preload, create:this.create} - functions to call for our states
        this.setGame(new Phaser.Game(ancho, alto, Phaser.CENTER, 'content', {
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
            setObstaculo: this.setObstaculo,
            getObstaculo: this.getObstaculo,
            setCursores: this.setCursores,
            getCursores: this.getCursores,
            setSaltarBtn: this.setSaltarBtn,
            getSaltarBtn: this.getSaltarBtn,
            setBtnVolar: this.setBtnVolar,
            getBtnVolar: this.getBtnVolar,
        }));
    }
    //--------------------setters y getters --------------------------------------
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
    Costanera.prototype.setObstaculo = function (value) {
        this.obstaculo = value;
    };
    Costanera.prototype.getObstaculo = function () {
        return this.obstaculo;
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
    Costanera.prototype.setBtnVolar = function (volar) {
        this.btnVolar = volar;
    };
    Costanera.prototype.getBtnVolar = function () {
        return this.btnVolar;
    };
    Costanera.prototype.preload = function () {
        // add our logo image to the assets class under the
        // key 'logo'. We're also setting the background colour
        // so it's the same as the background colour in the image
        this.getGame().load.image('player', 'assets/imagen.png');
        this.getGame().load.image('costanera', "assets/costanera.jpg");
        //Agregamos un comentario para probar subir cambios a GIT desde el editor
        //hacemos un cambio en el archivo
    };
    Costanera.prototype.create = function () {
        // add the 'logo' sprite to the game, position it in the
        // center of the screen, and set the anchor to the center of
        // the image so it's centered properly. There's a lot of
        // centering in that last sentence
        //Seteamos la imagen del juego en la posicion '0,0'
        //y el ancho y alto de la misma según el tamaño de la ventana actual
        var logo = this.getGame().add.sprite(this.getGame().world.centerX, this.getGame().world.centerY, 'costanera');
        logo.x = 0;
        logo.y = 0;
        logo.height = this.getGame().height;
        logo.width = this.getGame().width;
        var personaje = this.getGame().add.sprite(100, 200, 'player');
        personaje.height = 150;
        personaje.width = 75;
        this.setPersonaje(personaje);
        this.getGame().physics.arcade.enable(this.getPersonaje());
        this.getPersonaje().body.collideWorldBounds = true;
        this.getPersonaje().body.gravity.y = 500;
        this.setCursores(this.getGame().input.keyboard.createCursorKeys());
        this.setSaltarBtn(this.getGame().input.keyboard.addKey(Phaser.Keyboard.SPACEBAR));
        this.setBtnVolar(this.getGame().input.keyboard.addKey(Phaser.Keyboard.V));
    };
    Costanera.prototype.update = function () {
        // this.game.physics.arcade.collide(this.player, platforms);
        this.getPersonaje().body.velocity.x = 0;
        if (this.getCursores().left.isDown) {
            this.getPersonaje().body.velocity.x = -250;
        }
        else if (this.getCursores().right.isDown) {
            this.getPersonaje().body.velocity.x = 250;
        }
        if (this.getSaltarBtn().isDown && (this.getPersonaje().body.onFloor() || this.getPersonaje().body.touching.down)) {
            this.getPersonaje().body.velocity.y = -400;
        }
        if (this.getBtnVolar().isDown && (this.getPersonaje().body || this.getPersonaje().body.touching.down)) {
            this.getPersonaje().body.velocity.y = -400;
        }
    };
    return Costanera;
}());
// when the page has finished loading, create our game
window.onload = function () {
    var game = new Costanera(window.innerWidth, window.innerHeight);
};
/// <reference path="../tsDefinitions/phaser.d.ts" />
var Personaje = /** @class */ (function (_super) {
    __extends(Personaje, _super);
    function Personaje() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Personaje;
}(Phaser.Sprite));
