import Header from 'src/views/header/Header.component';

import {render} from 'src/render.js';

export default class HeaderPresenter {

  header = new Header();

  constructor(pageBody) {
    this.pageBody = pageBody;
  }

  getFilterElementData() {
    return {
      1: {
        id: 'filter-everything',
        value: 'everything',
        checked: true,
        disabled: false,
        labelText: 'Everything'
      },
      2: {
        id: 'filter-future',
        value: 'future',
        checked: false,
        disabled: false,
        labelText: 'Future'
      },
      3: {
        id: 'filter-present',
        value: 'present',
        checked: false,
        disabled: false,
        labelText: 'Present'
      },
      4: {
        id: 'filter-past',
        value: 'past',
        checked: false,
        disabled: false,
        labelText: 'Past'
      }
    };
  }

  init() {
    render(this.header, this.pageBody, 'afterbegin');
  }
}
