import AbstractView from 'src/framework/view/abstract-view';

function createHTMLTemplate() {
  return `<div class="page-body__container">
        <section class="trip-events">
          <h2 class="visually-hidden">Trip events</h2>
            <ul class="trip-events__list"></ul>
        </section>
      </div>`;
}

export default class MainContainerComponent extends AbstractView{

  get template() {
    return createHTMLTemplate();
  }
}
