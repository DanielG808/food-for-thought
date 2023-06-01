// DEPENEDENCIES

var recipeCardEl = document.getElementsByClassName("card-section");

var searchInputEl = document.querySelector(".search-input");
var searchButtonEl = document.querySelector(".search__button");


// DATA

//FUNCTIONS

function getMeal() {
    console.log("got dat API");

    var requestUrl = `https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast`

    fetch(requestUrl)
    .then(function (response) {
      console.log(response);
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      var meals = data.meals;
      for (i = 0; i < meals.length; i++) {
        var recipeCard = document.createElement("div");
        var mealId = meals[i].idMeal;
        // console.log("This is a meal ID => " + mealId);
        var recipeTitle = meals[i].strMeal;
        // console.log("This is the recipe title: " + recipeTitle);

        recipeCard.classList.add("card");
        recipeCard.textContent = "card"

        document.querySelector(".card-container").appendChild(recipeCard);
        }    
    })
}

function getMealRecipe() {
  var requestUrl = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=53016`
        
        fetch(requestUrl)
        .then(function (response) {
            console.log(response);
             return response.json();
        })
        .then(function (data) {
            console.log(data);
        })
}        

getMealRecipe();

// USER INTERACTIONS

searchButtonEl.addEventListener("click", function (event) {
  event.preventDefault();
  console.log("button clicked!");
  getMeal();
})

// INITILIZATIONS