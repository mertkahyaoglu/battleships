class Preloader

  constructor: (game)->

  preload: ->
    @game.add.sprite 0, 0, 'bg'
    @game.loadingbar = @game.add.sprite this.world.centerX - this.cache.getImage('loadingbar').width / 2, this.world.centerY, 'loadingbar'
    @game.load.setPreloadSprite @game.loadingbar

    //load the assets

  create: ->
    @game.loadingbar.cropEnabled = false

  update: ->
    @game.state.start 'Menu'

module.exports = Preloader
