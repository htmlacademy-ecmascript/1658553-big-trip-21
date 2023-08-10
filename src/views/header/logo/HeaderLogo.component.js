import {createElement} from '../../../render.js';

function createNewHeaderLogoTemplate(logoSrc) {
  return `
                <img class="page-header__logo" src="${logoSrc}" width="42" height="42" alt="Trip logo">`;
}

export default class HeaderLogoComponent {
  constructor(logoSrc) {
    this.logoSrc = logoSrc;
  }

  getTemplate() {
    return createNewHeaderLogoTemplate(this.logoSrc);
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
