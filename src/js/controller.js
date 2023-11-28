export default class ControllerGame {
  constructor(gameplay) {
    this.gameplay = gameplay;
    this.intervalId = null;
    this.newGame = null;
  }

  build() {
    this.gameplay.drawUI();
    this.clicklListener();
    this.startGame(1000);
  }

  startGame(interval) {
    this.intervalId = setInterval(() => {
      if (this.gameplay.position !== null) {
        this.gameplay.removePositionGoblin();
      }
      this.gameplay.addPositionGoblin();
    }, interval);
  }

  clicklListener() {
    this.onCellListener = (event) => this.onCellClick(event);
    this.gameplay.container.addEventListener('click', this.onCellListener);
  }

  onCellClick(event) {
    if (event.target.classList.contains('goblin')) {
      this.gameplay.hits.textContent = +this.gameplay.hits.textContent + 1;
    } else {
      this.gameplay.misses.textContent = +this.gameplay.misses.textContent + 1;
    }
    this.checkingWinLoser();
  }

  clickNewGameListener() {
    this.newGame = document.querySelector('.pop-up-container');
    this.newGameListener = () => this.newGameClick();
    this.newGame.addEventListener('click', this.newGameListener);
  }

  newGameClick() {
    this.gameplay.modal.removwPopUpContainer();
    this.newGame.removeEventListener('click', this.newGameListener);
    this.build();
  }

  checkingWinLoser() {
    if (this.gameplay.misses.textContent === '5') {
      this.gameplay.modal.addPopUpContainer();
      this.clickNewGameListener();
      clearInterval(this.intervalId);
      this.gameplay.container.removeEventListener('click', this.onCellListener);
    }
  }
}
