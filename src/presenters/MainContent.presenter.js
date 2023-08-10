import BodyContainerComponent from 'src/views/main-content/BodyContainer.component';
import FilterFormComponent from 'src/views/main-content/filtres/FilterForm.component';
import TripElementComponent from 'src/views/main-content/trip/TripElement.component';
import TripUlComponent from 'src/views/main-content/trip/TripUl.component';
import FilterElementComponent from 'src/views/main-content/filtres/FilterElement.component';
import PointEditorFormComponent from 'src/views/options/edit-point/PointEditorForm.component';

import {render} from 'src/render.js';
export default class MainContentPresenter {
  bodyContainer = new BodyContainerComponent();
  filterForm = new FilterFormComponent('#', 'get');
  tripElement = new TripElementComponent();
  tripUl = new TripUlComponent();
  tripEditForm = new PointEditorFormComponent();
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
    render(this.bodyContainer, this.pageBody.querySelector('.page-body__page-main '), 'afterbegin');
    render(this.filterForm, this.bodyContainer.getElement().querySelector('.trip-events'), 'beforeend');

    const filterElements = this.getFilterElementData();
    for (const key in filterElements) {
      if (Object.hasOwnProperty.call(filterElements, key)) {
        const filterElementData = filterElements[key];
        const filterElement = new FilterElementComponent(filterElementData.id, filterElementData.value, filterElementData.checked, filterElementData.disabled, filterElementData.labelText);
        render(filterElement, this.filterForm.getElement(), 'beforeend');
      }
      render(this.tripUl, this.bodyContainer.getElement().querySelector('.trip-events'), 'beforeend');
    }
    const liElements = this.getMainContent();
    for (const key in liElements) {
      if (Object.hasOwnProperty.call(liElements, key)) {
        const liElementData = liElements[key];
        console.log(liElementData);
        if (liElementData.isEdit) {
          render(this.tripEditForm, this.tripUl.getElement(), 'beforeend');
        } else {
          const liElement = new TripElementComponent(liElementData.fullDate,
            liElementData.shortDate,
            liElementData.iconSrc,
            liElementData.eventTitle,
            liElementData.eventFullStartTime,
            liElementData.eventShortStartTime,
            liElementData.eventFullEndTime,
            liElementData.eventShortEndTime,
            liElementData.eventDuration,
            liElementData.eventPriceValue,
            liElementData.eventOfferTitle,
            liElementData.eventOfferPrice,);
          render(liElement, this.tripUl.getElement(), 'beforeend');
        }

      }
    }
  }
}

