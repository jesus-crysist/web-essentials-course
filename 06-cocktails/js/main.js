document.getElementById('filterForm').onsubmit = searchCocktails;

function searchCocktails(event) {
  event.preventDefault();
  event.stopPropagation();

  const cocktailsUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php';

  // get param for cocktail name - "s"
  // get param for ingredient name - "i"
}

function listIngredients() {

  const ingredientListUrl = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list';
}
