import BigYellowBtn from 'src/views/btns-inputs/big-yellow-btn/BigYellowBtn.component';
import FilterElement from 'src/views/header/filters/FilterElement.component';
import FilterForm from 'src/views/header/filters/FilterForm.component';
import HeaderLogo from 'src/views/header/logo/HeaderLogo.component';
import TripInfo from 'src/views/header/trip-info/TripInfo.component';
import Header from 'src/views/header/Header.component';

import {render} from 'src/render.js';

export default class HeaderPresenter {
  bigYellowBtn = new BigYellowBtn('New event');

  filterForm = new FilterForm('#', 'get');
  headerLogo = new HeaderLogo('img/logo.png');
  tripInfo = new TripInfo();
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
    render(this.headerLogo, this.header.getElement().querySelector('.page-body__container'), 'afterbegin');
    render(this.tripInfo, this.header.getElement().querySelector('.trip-main'), 'afterbegin');
    render(this.filterForm, this.header.getElement().querySelector('.trip-controls__filters'), 'beforeend');
    const filterElements = this.getFilterElementData();

    for (const key in filterElements) {
      if (Object.hasOwnProperty.call(filterElements, key)) {
        const filterElementData = filterElements[key];
        const filterElement = new FilterElement(filterElementData.id,filterElementData.value,filterElementData.checked,filterElementData.disabled,filterElementData.labelText);
        render(filterElement, this.filterForm.getElement(), 'beforeend');
      }
    }
    render(this.bigYellowBtn, this.header.getElement().querySelector('.trip-main'), 'beforeend');
  }
}
