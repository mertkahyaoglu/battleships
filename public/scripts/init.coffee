class Init

  constructor: (game)->

  preload: ->
    @game.load.image 'loadingbar', 'assets/loadingbar.png'
    @game.load.image 'bg', 'assets/bg.png'

  create: ->
    @game.input.maxPointers = 1
    @game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL
    @game.scale.pageAlignHorizontally = true
    @game.scale.pageAlignVertically = true
    @game.scale.setScreenSize true
    @game.state.start 'Preloader'

module.exports = Init
