document.getElementById('filterForm').addEventListener('submit', searchCocktails);

window.addEventListener('load', listIngredients);

function createAndAppendElement(elementName, parent, attributes) {

  const el = document.createElement(elementName);

  if (attributes && typeof attributes === 'object') {

    for (let key in attributes) {

      if (attributes.hasOwnProperty(key)) {
        let value = attributes[key];

        if (key === 'text') {
          el.appendChild(document.createTextNode(value));
        } else {
          el.setAttribute(key, value);
        }
      }
    }
  }

  parent.appendChild(el);

  return el;
}

function craftUrl(base, params) {
  // append params as GET query params to base url and return string
  let url = base + '?';
  let paramArray = [];

  for(let p in params) {
    if (params.hasOwnProperty(p)) {
      paramArray.push(p + '=' + params[p]);
    }
  }

  url += paramArray.join('&');

  return url;
}

function searchCocktails(event) {
  event.preventDefault();
  event.stopPropagation();

  const cocktailsUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php';

  // get param for cocktail name - "s"
  // get param for ingredient name - "i"

  // grab values from form inputs and set values in "params" object
  let params = {};
  const nameVal = document.getElementById('name').value;
  const ingredientVal = document.getElementById('ingredient').value;

  if (nameVal) {
    params = {
      s: nameVal
    };
  }

  if (ingredientVal) {
    params = {
      ...params,
      i: ingredientVal
    };
  }

  const url = craftUrl(cocktailsUrl, params);

  searchCocktailsPromise(url)
    .then((responseJson) => createDrinksTable(responseJson.drinks));
}

function doRequest(url, successCallback, errorCallback) {
  // send request to given URL and call callbacks when appropriate response is returned
  const httpRequest = new XMLHttpRequest();

  httpRequest.addEventListener('readystatechange', () => {

    if (httpRequest.readyState === XMLHttpRequest.DONE) {

      if (httpRequest.status === 200) {
        const responseJson = JSON.parse(httpRequest.responseText || '{}');
        successCallback(responseJson);
      } else if (errorCallback) {
        errorCallback(
          new Error(`HTTP error, code: ${httpRequest.status}, message: ${httpRequest.statusText}`)
        );
      }
    }
  });

  httpRequest.open('GET', url);
  httpRequest.send(null);
}

function searchCocktailsPromise(url) {

  // return promise that calls doRequest
  return new Promise((resolve, reject) => {
    doRequest(
      url,
      (responseJson) => resolve(responseJson),
      (error) => reject(error)
    )
  });
}

function listIngredients() {

  const ingredientListUrl = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list';

  doRequest(
    ingredientListUrl,
    (responseObj) => {
      const ingredients = responseObj.drinks;
      const selectEl = document.getElementById('ingredient');

      ingredients.forEach(ingredient =>
        createAndAppendElement('option', selectEl, {
          text: ingredient.strIngredient1,
          value: ingredient.strIngredient1
        })
      );
    },
    (err) => console.log(err)
  );
}

function createDrinksTable(drinks) {

  const tableBody = document.querySelector('#cocktailsTable tbody');
  const columns = [ 'strDrinkThumb', 'strDrink', 'strCategory', 'strGlass', 'strInstructions' ];

  drinks.forEach(drink => {

    const row = createAndAppendElement('tr', tableBody);

    columns.forEach(col => {

      if (col === 'strDrinkThumb') {
        const cell = createAndAppendElement('td', row);
        const img = createAndAppendElement('img', cell, {
          src: drink[col],
          alt: `${drink.strDrink} image`,
          width: 80
        });

        img.addEventListener('click', (event) => window.open(drink[col]));

      } else {
        createAndAppendElement('td', row, {
          text: drink[col]
        });
      }
    });

  })

}
