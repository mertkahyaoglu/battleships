class Midship
	constructor: (@game, @x, @y)->
		@tileSize = 2

	create: ->
		@sprite = @game.add.sprite @x, @y, 'midship'
		@sprite.inputEnabled = true
		@sprite.input.enableDrag()
		@sprite.events.onDragStop.add @onDragStop, @game

	onDragStop: ->
		console.log "onDragStop"

module.exports = Midship
