(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = {
  width: 640,
  height: 900,
  stage: {
    backgroundColor: 0x192f47
  }
};


},{}],2:[function(require,module,exports){
var Bigship;

Bigship = (function() {
  function Bigship(game, x, y) {
    this.game = game;
    this.x = x;
    this.y = y;
    this.tileSize = 3;
  }

  Bigship.prototype.create = function() {
    this.sprite = this.game.add.sprite(this.x, this.y, 'bigship');
    this.sprite.inputEnabled = true;
    this.sprite.input.enableDrag();
    return this.sprite.events.onDragStop.add(this.onDragStop, this.game);
  };

  Bigship.prototype.onDragStop = function() {
    return console.log("onDragStop");
  };

  return Bigship;

})();

module.exports = Bigship;


},{}],3:[function(require,module,exports){
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

  return Board;

})();

module.exports = Board;


},{}],4:[function(require,module,exports){
var Midship;

Midship = (function() {
  function Midship(game, x, y) {
    this.game = game;
    this.x = x;
    this.y = y;
    this.tileSize = 2;
  }

  Midship.prototype.create = function() {
    this.sprite = this.game.add.sprite(this.x, this.y, 'midship');
    this.sprite.inputEnabled = true;
    this.sprite.input.enableDrag();
    return this.sprite.events.onDragStop.add(this.onDragStop, this.game);
  };

  Midship.prototype.onDragStop = function() {
    return console.log("onDragStop");
  };

  return Midship;

})();

module.exports = Midship;


},{}],5:[function(require,module,exports){
var Miniship;

Miniship = (function() {
  function Miniship(game, x, y) {
    this.game = game;
    this.x = x;
    this.y = y;
    this.tileSize = 1;
  }

  Miniship.prototype.create = function() {
    this.sprite = this.game.add.sprite(this.x, this.y, 'miniship');
    this.sprite.inputEnabled = true;
    this.sprite.input.enableDrag();
    return this.sprite.events.onDragStop.add(this.onDragStop, this.game);
  };

  Miniship.prototype.onDragStop = function() {
    return console.log("onDragStop");
  };

  return Miniship;

})();

module.exports = Miniship;


},{}],6:[function(require,module,exports){
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


},{"./config.coffee":1}],7:[function(require,module,exports){
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


},{"./config.coffee":1,"./init.coffee":6,"./screens/game.coffee":8,"./screens/preloader.coffee":9}],8:[function(require,module,exports){
var Bigship, Board, Game, Midship, Miniship;

Board = require('../entities/board.coffee');

Miniship = require('../entities/miniship.coffee');

Midship = require('../entities/midship.coffee');

Bigship = require('../entities/bigship.coffee');

Game = (function() {
  function Game(game) {
    this.board = new Board(game, 10, 10);
    this.minishipFactory = new Miniship(game, 0, 650);
    this.midshipFactory = new Midship(game, 128, 650);
    this.bigshipFactory = new Bigship(game, 256, 650);
  }

  Game.prototype.preload = function() {};

  Game.prototype.create = function() {
    this.tiles = this.board.create();
    this.miniship = this.minishipFactory.create();
    this.midship = this.midshipFactory.create();
    return this.bigship = this.bigshipFactory.create();
  };

  Game.prototype.update = function() {};

  return Game;

})();

module.exports = Game;


},{"../entities/bigship.coffee":2,"../entities/board.coffee":3,"../entities/midship.coffee":4,"../entities/miniship.coffee":5}],9:[function(require,module,exports){
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


},{}]},{},[7]);
