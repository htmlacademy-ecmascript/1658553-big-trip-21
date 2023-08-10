import {createElement} from '../../render.js';

function createHeaderTemplate() {
  return `<header class="page-header">
      <div class="page-body__container  page-header__container">
<!--        лого сюда-->

        <div class="trip-main">
<!--          Трип инфо тут-->

          <div class="trip-main__trip-controls  trip-controls">
            <div class="trip-controls__filters">
              <h2 class="visually-hidden">Filter events</h2>
<!--              фильтры сюда-->
            </div>
          </div>

<!--         Большая жетлая кнопка сюда-->
        </div>
      </div>
    </header>`;
}

export default class HeaderComponent {


  getTemplate() {
    return createHeaderTemplate();
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
