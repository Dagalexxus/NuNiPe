import Phaser from 'phaser';
import config from './config';
import { Player } from './modules/player';
import {Demo} from './scenes/Demo';


new Phaser.Game(
  Object.assign(config, {
    scene: [Demo]
  })
);
