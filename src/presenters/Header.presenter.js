import Header from 'src/views/header/Header.component';
import FilterForm from 'src/views/header/filter/FilterForm.component';
import {render, RenderPosition} from 'src/render.js';

export default class HeaderPresenter {

  header = new Header();


  constructor(pageBody) {
    this.pageBody = pageBody;
  }

  getFilterElementData() {
    return [
      {
        id: 'filter-everything',
        value: 'everything',
        checked: true,
        disabled: false,
        labelText: 'Everything'
      },
      {
        id: 'filter-future',
        value: 'future',
        checked: false,
        disabled: false,
        labelText: 'Future'
      },
      {
        id: 'filter-present',
        value: 'present',
        checked: false,
        disabled: false,
        labelText: 'Present'
      },
      {
        id: 'filter-past',
        value: 'past',
        checked: false,
        disabled: false,
        labelText: 'Past'
      }
    ];
  }

  init() {
    render(this.header, this.pageBody, RenderPosition.AFTERBEGIN);
    render(new FilterForm(this.getFilterElementData()), this.header.getElement().querySelector('.trip-controls__filters'));

  }
}
