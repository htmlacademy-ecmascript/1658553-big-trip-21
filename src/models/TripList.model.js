import {getDestinationsForPoint, getOffersForPoint, getPoints} from 'src/mock/TripList.mock';

const TRIPS_COUNT = 3;
export default class TripListModel {
  points = getPoints().slice(0,TRIPS_COUNT);

  getPoints() {
    return this.points.map((point) => ({...point, offers: this.getOffersForPoint(point)}));
  }

  getDestinationForPoint(point) {
    return getDestinationsForPoint(point);
  }

  getOffersForPoint(point) {
    return getOffersForPoint(point);
  }
}
