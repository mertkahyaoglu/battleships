class Miniship
	constructor: (@game, @x, @y)->
		@tileSize = 1

	create: ->
		@sprite = @game.add.sprite @x, @y, 'miniship'
		@sprite.inputEnabled = true
		@sprite.input.enableDrag()
		@sprite.events.onDragStop.add @onDragStop, @game

	onDragStop: ->
		console.log "onDragStop"

module.exports = Miniship