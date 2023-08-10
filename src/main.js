import HeaderPresenter from './presenters/Header.presenter';
import MainContentPresenter from './presenters/MainContent.presenter';


const pageBody = document.querySelector('.page-body');
const headerPresenter = new HeaderPresenter(pageBody);
const mainPresenter = new MainContentPresenter(pageBody);
headerPresenter.init();
mainPresenter.init();


