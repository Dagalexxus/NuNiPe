import Phaser from 'phaser';
import config from './config';
import { Player } from './modules/player';
import {GameScene} from './scenes/game';


new Phaser.Game(
  Object.assign(config, {
    scene: [GameScene]
  })
);
