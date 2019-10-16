document.getElementById('filterForm').onsubmit = searchCocktails;

function craftUrl(base, params) {
  // append params as GET query params to base url and return string
}

function searchCocktails(event) {
  event.preventDefault();
  event.stopPropagation();

  const cocktailsUrl = 'https://www.thecocktaildb.com/api/json/v1/1/sarch.php';

  // get param for cocktail name - "s"
  // get param for ingredient name - "i"

  // grab values from form inputs and set values in "params" object
  let params = {};

  const url = craftUrl(cocktailsUrl, params);

  searchCocktailsAjax(url);
  searchCocktailsPromise(url)
    .then((responseJson) => console.log(responseJson));
}

function searchCocktailsAjax(url) {
  // call doRequest and print result in console
}

function doRequest(url, successCallback, errorCallback) {
  // send request to given URL and call callbacks when appropriate response is returned
}

function searchCocktailsPromise(url) {

  // return promise that calls doRequest

}

function listIngredients() {

  const ingredientListUrl = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list';
}
