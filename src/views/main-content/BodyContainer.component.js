import {createElement} from 'src/render.js';

function createBodyTemplate() {
  return `<div class="page-body__container">
        <section class="trip-events">
          <h2 class="visually-hidden">Trip events</h2>
<!--          тут фильтры-->

        </section>
      </div>`;
}

export default class BodyContainerComponent {


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
