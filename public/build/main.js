(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = {
  width: 320,
  height: 640,
  stage: {
    backgroundColor: 0x192f47
  }
};


},{}],2:[function(require,module,exports){
var Board;

Board = (function() {
  function Board(game, width, height) {
    this.game = game;
    this.width = width;
    this.height = height;
  }

  Board.prototype.create = function() {
    var tile, x, y;
    return this.board = (function() {
      var _i, _ref, _results;
      _results = [];
      for (x = _i = 0, _ref = this.width; 0 <= _ref ? _i < _ref : _i > _ref; x = 0 <= _ref ? ++_i : --_i) {
        _results.push((function() {
          var _j, _ref1, _results1;
          _results1 = [];
          for (y = _j = 0, _ref1 = this.height; 0 <= _ref1 ? _j < _ref1 : _j > _ref1; y = 0 <= _ref1 ? ++_j : --_j) {
            tile = this.game.add.sprite(x * 64, y * 64, 'tile');
            tile.inputEnabled = true;
            tile.events.onInputOver.add(this.onTileHover, this.game);
            _results1.push(tile.events.onInputOut.add(this.onTileOut, this.game));
          }
          return _results1;
        }).call(this));
      }
      return _results;
    }).call(this);
  };

  Board.prototype.onTileHover = function(tile) {
    return tile.loadTexture('tile-hover', 0);
  };

  Board.prototype.onTileOut = function(tile) {
    return tile.loadTexture('tile', 0);
  };

  Board.prototype.onTileClick = function(tile) {};

  return Board;

})();

module.exports = Board;


},{}],3:[function(require,module,exports){
var Ship;

Ship = (function() {
  function Ship(game, x, y) {
    this.game = game;
    this.x = x;
    this.y = y;
  }

  Ship.prototype.create = function() {
    this.sprite = this.game.add.sprite(this.x, this.y, 'miniship');
    this.sprite.inputEnabled = true;
    this.sprite.input.enableDrag();
    return this.sprite.events.onDragStop.add(this.onDragStop, this.game);
  };

  Ship.prototype.onDragStop = function() {
    return console.log("onDragStop");
  };

  return Ship;

})();

module.exports = Ship;


},{}],4:[function(require,module,exports){
var Init, config;

config = require('./config.coffee');

Init = (function() {
  function Init(game) {}

  Init.prototype.preload = function() {
    return this.game.load.image('loadingbar', 'assets/title.png');
  };

  Init.prototype.create = function() {
    this.game.input.maxPointers = 1;
    this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    this.game.scale.pageAlignHorizontally = true;
    this.game.scale.pageAlignVertically = true;
    this.game.scale.setScreenSize(true);
    this.game.stage.backgroundColor = config.stage.backgroundColor;
    return this.game.state.start('preloader');
  };

  return Init;

})();

module.exports = Init;


},{"./config.coffee":1}],5:[function(require,module,exports){
var Game, Init, Preloader, config;

Init = require('./init.coffee');

Preloader = require('./screens/preloader.coffee');

Game = require('./screens/game.coffee');

config = require('./config.coffee');

window.onload = function() {
  var demo;
  demo = new Phaser.Game(config.width, config.height, Phaser.AUTO);
  demo.state.add('init', Init, true);
  demo.state.add('preloader', Preloader);
  return demo.state.add('game', Game);
};


},{"./config.coffee":1,"./init.coffee":4,"./screens/game.coffee":6,"./screens/preloader.coffee":7}],6:[function(require,module,exports){
var Board, Game, Ship;

Board = require('../entities/board.coffee');

Ship = require('../entities/ship.coffee');

Game = (function() {
  function Game(game) {
    this.board = new Board(game, 5, 5);
    this.shipFactory = new Ship(game, 0, 330);
  }

  Game.prototype.preload = function() {};

  Game.prototype.create = function() {
    this.tiles = this.board.create();
    return this.ship = this.shipFactory.create();
  };

  Game.prototype.update = function() {};

  return Game;

})();

module.exports = Game;


},{"../entities/board.coffee":2,"../entities/ship.coffee":3}],7:[function(require,module,exports){
var Preloader;

Preloader = (function() {
  function Preloader(game) {}

  Preloader.prototype.preload = function() {
    this.loadingbar = this.game.add.sprite(this.game.world.centerX - this.game.cache.getImage('loadingbar').width / 2, this.game.world.centerY, 'loadingbar');
    this.game.load.setPreloadSprite(this.loadingbar);
    this.game.load.image('tile', 'assets/tile.png');
    this.game.load.image('tile-hover', 'assets/tile-hover.png');
    this.game.load.image('miniship', 'assets/1.png');
    this.game.load.image('midship', 'assets/2.png');
    this.game.load.image('bigship', 'assets/3.png');
    this.game.load.image('x', 'assets/x.png');
    return this.game.load.image('explosion', 'assets/explosion.png');
  };

  Preloader.prototype.create = function() {
    return this.loadingbar.cropEnabled = false;
  };

  Preloader.prototype.update = function() {
    return this.game.state.start('game');
  };

  return Preloader;

})();

module.exports = Preloader;


},{}]},{},[5]);
