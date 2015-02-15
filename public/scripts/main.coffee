Init 	  = require './init.coffee'
Preloader = require './screens/preloader.coffee'
Game 	  = require './screens/game.coffee'
config 	  = require './config.coffee'

window.onload = () ->
  demo = new Phaser.Game config.width, config.height, Phaser.AUTO
  demo.state.add 'init', Init, yes
  demo.state.add 'preloader', Preloader
  demo.state.add 'game', Game
