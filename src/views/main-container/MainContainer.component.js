import {createElement} from 'src/render.js';

function createBodyTemplate() {
  return `<div class="page-body__container">
        <section class="trip-events">
          <h2 class="visually-hidden">Trip events</h2>
            <ul class="trip-events__list"></ul>
        </section>
      </div>`;
}

export default class MainContainerComponent {


  getTemplate() {
    return createBodyTemplate();
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
