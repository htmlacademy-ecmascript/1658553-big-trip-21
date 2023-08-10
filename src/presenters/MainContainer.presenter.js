import BodyContainerComponent from 'src/views/main-container/MainContainer.component';


import {render} from 'src/render.js';
export default class MainContainerPresenter {
  mainContainer = new BodyContainerComponent();

  constructor(pageBody) {
    this.pageBody = pageBody;
  }

  getFilterElementData() {
    return {
      1: {
        id: 'sort-day',
        value: 'sort-day',
        checked: true,
        disabled: false,
        labelText: 'Day'
      },
      2: {
        id: 'sort-event',
        value: 'sort-event',
        checked: false,
        disabled: true,
        labelText: 'Event'
      },
      3: {
        id: 'sort-time',
        value: 'sort-time',
        checked: false,
        disabled: false,
        labelText: 'Time'
      },
      4: {
        id: 'sort-price',
        value: 'sort-price',
        checked: false,
        disabled: false,
        labelText: 'Price'
      },
      5: {
        id: 'sort-offer',
        value: 'sort-offer',
        checked: false,
        disabled: false,
        labelText: 'Offers'
      }
    };
  }

  getMainContent() {
    return {
      1: {
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
      2: {
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
      3: {
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
    };
  }

  init() {
    render(this.mainContainer, this.pageBody.querySelector('.page-body__page-main '), 'afterbegin');

  }


}

