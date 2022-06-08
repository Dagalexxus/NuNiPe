import Phaser from 'phaser';
import config from './Config';
import { Player } from './modules/Player';
import {GameScene} from './scenes/Game';


new Phaser.Game(
  Object.assign(config, {
    scene: [GameScene]
  })
);
