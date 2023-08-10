import HeaderPresenter from 'src/presenters/Header.presenter';
import MainContentPresenter from 'src/presenters/MainContainer.presenter';


const pageBody = document.querySelector('.page-body');
const headerPresenter = new HeaderPresenter(pageBody);
const mainPresenter = new MainContentPresenter(pageBody);
headerPresenter.init();
mainPresenter.init();


