Board = require '../entities/board.coffee'
Miniship = require '../entities/miniship.coffee'
Midship = require '../entities/midship.coffee'
Bigship = require '../entities/bigship.coffee'

class Game

  constructor: (game)->
  	@board = new Board(game, 10, 10)
  	@minishipFactory = new Miniship(game, 0, 650)
  	@midshipFactory = new Midship(game, 128, 650)
  	@bigshipFactory = new Bigship(game, 256, 650)
  preload: ->
  	

  create: ->
  	@tiles = @board.create()
  	@miniship = @minishipFactory.create()
  	@midship = @midshipFactory.create()
  	@bigship = @bigshipFactory.create()

  update: ->
    
module.exports = Game
