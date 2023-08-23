import BodyContainerComponent from 'src/views/main-container/MainContainer.component';
import FiltersForm from 'src/views/main-container/filter/Filter.component';
import TripList from 'src/views/main-container/trip-list/TripListElement.component';
import TripListEditor from 'src/views/main-container/trip-list/TripListEditor.component';

import {render, RenderPosition} from 'src/framework/render';

export default class MainContainerPresenter {
  mainContainer = new BodyContainerComponent();
  #pageBody = null;
  #tripListModel = null;

  constructor(pageBody, TripListModel) {
    this.#pageBody = pageBody;
    this.#tripListModel = TripListModel;
  }

  #getFilterElementData() {
    return [
      {
        id: 'sort-day',
        value: 'sort-day',
        checked: true,
        disabled: false,
        labelText: 'Day',
        class: 'trip-sort__item--day'
      },
      {
        id: 'sort-event',
        value: 'sort-event',
        checked: false,
        disabled: true,
        labelText: 'Event',
        class: 'trip-sort__item--event'
      },
      {
        id: 'sort-time',
        value: 'sort-time',
        checked: false,
        disabled: false,
        labelText: 'Time',
        class: 'trip-sort__item--time'
      },
      {
        id: 'sort-price',
        value: 'sort-price',
        checked: false,
        disabled: false,
        labelText: 'Price',
        class: 'trip-sort__item--price'
      },
      {
        id: 'sort-offer',
        value: 'sort-offer',
        checked: false,
        disabled: false,
        labelText: 'Offers',
        class: 'trip-sort__item--offer'
      }
    ];
  }

  #getTripListItemElement(tripListItem) {
    if (tripListItem.isEdit) {
      return new TripListEditor(tripListItem);
    }
    return new TripList(tripListItem);
  }

  init() {
    render(this.mainContainer, this.#pageBody.querySelector('.page-body__page-main '), RenderPosition.AFTERBEGIN);
    render(new FiltersForm(this.#getFilterElementData()), this.mainContainer.element.querySelector('.trip-events__list'), RenderPosition.BEFOREBEGIN);

    for (const tripListItem of this.#tripListModel.points) {
      render(this.#getTripListItemElement(tripListItem), this.mainContainer.element.querySelector('.trip-events__list'));
    }

  }


}

