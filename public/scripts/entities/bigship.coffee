class Bigship
	constructor: (@game, @x, @y)->
		@tileSize = 3

	create: ->
		@sprite = @game.add.sprite @x, @y, 'bigship'
		@sprite.inputEnabled = true
		@sprite.input.enableDrag()
		@sprite.events.onDragStop.add @onDragStop, @game

	onDragStop: ->
		console.log "onDragStop"

module.exports = Bigship
