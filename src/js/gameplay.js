import ModalGame from './modal';

export default class GamePlay {
  constructor() {
    this.boardSize = 4;
    this.container = null;
    this.cells = [];
    this.boardEl = null;
    this.position = null;
    this.modal = null;
    this.misses = null;
    this.hits = null;
  }

  bindToDOM(container) {
    if (!(container instanceof HTMLElement)) {
      throw new Error('HTMLElement is not defined');
    }
    this.container = container;
    this.modal = new ModalGame(container);
  }

  drawUI() {
    this.checkBinding();
    this.modal.insertToDOM(ModalGame.modalUI());

    this.container.innerHTML = `
    <h1 class= "title">Game Goblin</h1>
    <div class= "board"></div>
    <div class="results">
        <p class="misses">Misses : <span>0</span></p>
        <p class="hits">Hits : <span>0</span></p>
    </div>
 `;
    this.misses = this.container.querySelector('.misses span');
    this.hits = this.container.querySelector('.hits span');
    this.boardEl = this.container.querySelector('.board');
    for (let i = 0; i < this.boardSize ** 2; i += 1) {
      const cellEl = document.createElement('div');
      cellEl.classList.add('cell');
      this.boardEl.appendChild(cellEl);
    }
    this.cells = Array.from(this.boardEl.children);
    this.listener = (event) => this.onCellClick(event);
  }

  getRandomPosition() {
    this.index = Math.floor(Math.random() * this.boardSize ** 2);
    if (this.index === this.position) {
      return this.getRandomPosition();
    }
    return this.index;
  }

  addPositionGoblin() {
    this.position = this.getRandomPosition();
    this.cells[this.position].classList.add('goblin');
  }

  removePositionGoblin() {
    this.cells[this.position].classList.remove('goblin');
  }

  checkBinding() {
    if (this.container === null) {
      throw new Error('GamePlay not bind to DOM');
    }
  }
}
