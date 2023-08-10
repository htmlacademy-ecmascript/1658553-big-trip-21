import {createElement} from 'src/render.js';

function createNewFilterElementTemplate(id,value,checked,disabled,labelText) {
  return `
                <div class="trip-filters__filter">
                  <input id="${id}" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="${value}" ${checked ? 'checked' : ''} ${disabled ? 'disabled' : ''}>
                  <label class="trip-filters__filter-label" for="filter-everything">${labelText}</label>
                </div>`;
}

export default class FilterElementComponent {
  constructor(id,value,checked = false,disabled = false,labelText) {
    this.id = id;
    this.value = value;
    this.checked = checked;
    this.disabled = disabled;
    this.labelText = labelText;
  }

  getTemplate() {
    return createNewFilterElementTemplate(this.id,this.value,this.checked,this.disabled,this.labelText);
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
