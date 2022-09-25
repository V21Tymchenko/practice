// import refs from './refs/refs';
import NewsApiService from './refs/search/api-service';
import createMurkUp from './take-data/take-data';
// REFS
refs = {
  form: document.querySelector('#search-form'),
  btnForm: document.querySelector('.search-form__button'),
  btnMore: document.querySelector('.more'),
  gallery: document.querySelector('.gallery'),
};
// екземпляр класса
const newsApiService = new NewsApiService();
//listener
refs.form.addEventListener('submit', onSubmitSearch);
refs.btnMore.addEventListener('click', onLoadMore);

// map
function mapMurkUp(arr) {
  const murkUp = arr.map(item => createMurkUp(item));
  refs.gallery.insertAdjacentHTML('beforeend', murkUp.join(''));
}

function onSubmitSearch(e) {
  e.preventDefault();
  newsApiService.searchQuery = e.target.elements.searchQuery.value;
  newsApiService.resetPage();
  newsApiService.fetchArticles().then(articles => mapMurkUp(articles));
}
function onLoadMore() {
  newsApiService.fetchArticles().then(articles => mapMurkUp(articles));
}
