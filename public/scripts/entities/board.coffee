class Board
  constructor: (@game, @width, @height)->

  create: ->
  	@board = for x in [0...@width]
			   for y in [0...@height]
			     tile = @game.add.sprite x * 64, y * 64, 'tile'
			     tile.inputEnabled = true #disable at the beginning
			     tile.events.onInputOver.add @onTileHover, @game
			     tile.events.onInputOut.add @onTileOut, @game

  onTileHover:(tile) ->
  	tile.loadTexture('tile-hover', 0);

  onTileOut:(tile) ->
  	tile.loadTexture('tile', 0);

  onTileClick: (tile) ->

module.exports = Board
