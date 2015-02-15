class Ship
	constructor: (@game, @x, @y)->

	create: ->
		@sprite = @game.add.sprite @x, @y, 'miniship'
		@sprite.inputEnabled = true
		@sprite.input.enableDrag()
		@sprite.events.onDragStop.add @onDragStop, @game

	onDragStop: ->
		console.log "onDragStop"

module.exports = Ship
