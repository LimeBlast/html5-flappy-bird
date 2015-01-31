window.onload = function () {
  'use strict';

  var game
    , ns = window['html5-flappy-bird'];

  game = new Phaser.Game(400, 490, Phaser.AUTO, 'html5-flappy-bird-game');
  game.state.add('boot', ns.Boot);
  game.state.add('preloader', ns.Preloader);
  game.state.add('menu', ns.Menu);
  game.state.add('game', ns.Game);
  /* yo phaser:state new-state-files-put-here */

  game.state.start('boot');
};
