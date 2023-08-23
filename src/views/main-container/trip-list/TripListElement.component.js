import {formatDateToEventDate,getIconForType,formatTimeRange,timeDifference} from 'src/utils';
import AbstractView from 'src/framework/view/abstract-view';
function offersTemplate(wayPoint) {
  if (wayPoint.offers.length > 0) {
    const maxOffersToShow = 2; // Максимальное количество offers для отображения
    const offerElements = wayPoint.offers
      .slice(0, maxOffersToShow)
      .map((offerElement) => `
        <li class="event__offer">
          <span class="event__offer-title">${offerElement.title}</span>
          &plus;&euro;&nbsp;
          <span class="event__offer-price">${offerElement.price}</span>
        </li>`
      )
      .join('');

    return `
      <h4 class="visually-hidden">Offers:</h4>
      <ul class="event__selected-offers">
        ${offerElements}
      </ul>`;
  }
  return '';
}

function createHTMLTemplate(wayPoint) {
  const extraBlock = offersTemplate(wayPoint);
  return `<li class="trip-events__item">
        <div class="event">
            <time class="event__date" dateTime="${wayPoint.date_from}">${formatDateToEventDate(wayPoint.date_from)}</time>
            <div class="event__type">
                <img class="event__type-icon" width="42" height="42" src="${getIconForType(wayPoint.type)}" alt="Event type icon">
            </div>
            <h3 class="event__title">${wayPoint.type}</h3>
            <div class="event__schedule">
                <p class="event__time">
                    <time class="event__start-time" dateTime="${wayPoint.date_from}">${formatTimeRange(wayPoint.date_from)}</time>
                    &mdash;
                    <time class="event__end-time" dateTime="${wayPoint.date_to}">${formatTimeRange(wayPoint.date_to)}</time>
                </p>
                <p class="event__duration">${timeDifference(wayPoint.date_from,wayPoint.date_to)}</p>
            </div>
            <p class="event__price">
                &euro;&nbsp;<span class="event__price-value">${wayPoint.base_price}</span>
            </p>
            ${extraBlock}
            <button class="event__favorite-btn event__favorite-btn--active" type="button">
                <span class="visually-hidden">Add to favorite</span>
                <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">
                    <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>
                </svg>
            </button>
            <button class="event__rollup-btn" type="button">
                <span class="visually-hidden">Open event</span>
            </button>
        </div>
    </li>`;


}

export default class TripListElementComponent extends AbstractView {
  #wayPoint = null;
  constructor(wayPoint) {
    super();
    this.#wayPoint = wayPoint;
  }

  get template() {
    return createHTMLTemplate(this.#wayPoint);
  }
}
