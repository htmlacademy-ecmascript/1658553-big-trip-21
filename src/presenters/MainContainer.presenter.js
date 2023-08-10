import BodyContainerComponent from 'src/views/main-container/MainContainer.component';
import FiltersForm from 'src/views/main-container/filter/Filter.component';
import TripList from 'src/views/main-container/trip-list/TripList.componentElement';
import TripListEditor from 'src/views/main-container/trip-list/TripListEditor.component';

import {render, RenderPosition} from 'src/render.js';
export default class MainContainerPresenter {
  mainContainer = new BodyContainerComponent();

  constructor(pageBody) {
    this.pageBody = pageBody;
  }

  getFilterElementData() {
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

  getTripList() {
    return [
      {
        fullDate: '2019-03-18',
        shortDate: 'MAR 18',
        iconSrc: 'img/icons/taxi.png',
        eventTitle: 'Taxi Amsterdam',
        eventFullStartTime: '2019-03-18T10:30',
        eventShortStartTime: '10:30',
        eventFullEndTime: '2019-03-18T11:00',
        eventShortEndTime: '11:00',
        eventDuration: '30M',
        eventPriceValue: '20',
        eventOfferTitle: 'Order Uber',
        eventOfferPrice: '20',
        isEdit: false
      },
      {
        fullDate: '2019-03-18',
        shortDate: 'MAR 18',
        iconSrc: 'img/icons/flight.png',
        eventTitle: 'Flight Chamonix',
        eventFullStartTime: '2019-03-18T12:25',
        eventShortStartTime: '12:25',
        eventFullEndTime: '2019-03-18T13:35',
        eventShortEndTime: '13:35',
        eventDuration: '01H 10M',
        eventPriceValue: '160',
        eventOfferTitle: 'Add luggage',
        eventOfferPrice: '50',
        isEdit: true
      },
      {
        fullDate: '2019-03-18',
        shortDate: 'MAR 18',
        iconSrc: 'img/icons/drive.png',
        eventTitle: 'Drive Chamonix',
        eventFullStartTime: '2019-03-18T14:30',
        eventShortStartTime: '14:30',
        eventFullEndTime: '2019-03-18T16:05',
        eventShortEndTime: '16:05',
        eventDuration: '01H 35M',
        eventPriceValue: '160',
        eventOfferTitle: 'Rent a car',
        eventOfferPrice: '200',
        isEdit: false
      },
    ];
  }

  getListItemComponent(TripListItem) {
    if (TripListItem.isEdit){
      return new TripListEditor(TripListItem);
    }
    return new TripList(TripListItem);
  }

  init() {
    render(this.mainContainer, this.pageBody.querySelector('.page-body__page-main '), RenderPosition.AFTERBEGIN);
    render(new FiltersForm(this.getFilterElementData()), this.mainContainer.getElement().querySelector('.trip-events__list'),RenderPosition.BEFOREBEGIN);

    for (const tripListItem of this.getTripList()) {
      render(this.getListItemComponent(tripListItem), this.mainContainer.getElement().querySelector('.trip-events__list'));
    }

  }


}

