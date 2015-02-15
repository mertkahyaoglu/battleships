Board = require '../entities/board.coffee'
Ship = require '../entities/ship.coffee'

class Game

  constructor: (game)->
  	@board = new Board(game, 5, 5)
  	@shipFactory = new Ship(game, 0, 330)
  preload: ->


  create: ->
  	@tiles = @board.create()
  	@ship = @shipFactory.create()

  update: ->

module.exports = Game
