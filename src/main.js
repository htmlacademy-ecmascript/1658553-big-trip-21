import HeaderPresenter from 'src/presenters/Header.presenter';
import MainContentPresenter from 'src/presenters/MainContainer.presenter';
import TripListModel from 'src/models/TripList.model';

const pageBody = document.querySelector('.page-body');

const headerPresenter = new HeaderPresenter(pageBody);
const mainPresenter = new MainContentPresenter(pageBody,new TripListModel());

headerPresenter.init();
mainPresenter.init();


