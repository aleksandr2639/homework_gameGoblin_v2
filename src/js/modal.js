export default class ModalGame {
  constructor(container) {
    this.container = container;
    this.popup = null;
  }

  static modalUI() {
    return `
        <div class="pop-up-container">
            <div class="pop-up">
            <p class="pop-up-title">Game over!!!</p>
            </div>
        </div>`;
  }

  insertToDOM(html) {
    this.container.insertAdjacentHTML('afterend', html);
    this.popup = document.querySelector('.pop-up-container');
  }

  addPopUpContainer() {
    this.popup.classList.add('open');
  }

  removwPopUpContainer() {
    this.popup.classList.remove('open');
  }
}
