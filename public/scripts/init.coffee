config = require './config.coffee'

class Init

  #Stencil Std Bold
  constructor: (game)->

  preload: ->
    @game.load.image 'loadingbar', 'assets/title.png'

  create: ->
    @game.input.maxPointers = 1
    @game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL
    @game.scale.pageAlignHorizontally = true
    @game.scale.pageAlignVertically = true
    @game.scale.setScreenSize true
    @game.stage.backgroundColor = config.stage.backgroundColor
    @game.state.start 'preloader'

module.exports = Init
