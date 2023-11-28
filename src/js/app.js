import GamePlay from './gameplay';
import ControllerGame from './controller';

const gameplay = new GamePlay();
gameplay.bindToDOM(document.querySelector('.container'));

const controllerApp = new ControllerGame(gameplay);
controllerApp.build();
