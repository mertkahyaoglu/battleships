class Preloader

  constructor: (game)->

  preload: ->
    @loadingbar = @game.add.sprite @game.world.centerX - @game.cache.getImage('loadingbar').width / 2, @game.world.centerY, 'loadingbar'
    @game.load.setPreloadSprite(@loadingbar);

    #load the assets
    @game.load.image 'tile', 'assets/tile.png'
    @game.load.image 'tile-hover', 'assets/tile-hover.png'
    @game.load.image 'miniship', 'assets/1.png'
    @game.load.image 'midship', 'assets/2.png'
    @game.load.image 'bigship', 'assets/3.png'
    @game.load.image 'x', 'assets/x.png'
    @game.load.image 'explosion', 'assets/explosion.png'

  create: ->
    @loadingbar.cropEnabled = false

  update: ->
    @game.state.start 'game'
    
module.exports = Preloader
