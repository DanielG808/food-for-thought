// DEPENEDENCIES

var recipeCardEl = document.getElementsByClassName("card-section");

var searchInputEl = document.querySelector(".search-input");
var searchButtonEl = document.querySelector("#search-button");


// DATA

//FUNCTIONS

function getMealCards() {

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
        console.log(meals);
        var mealId = meals[i].idMeal;

        // generates a card for the recipe info to live
        var recipeCard = document.createElement("div");
        // adds the class card for styling
        recipeCard.classList.add("card");
        // recipeCard.textContent = "card"
        document.querySelector(".card-container").appendChild(recipeCard);

        var recipeTitle = meals[i].strMeal;
        var recipeImg = meals[i].strMealThumb;

        var cardImgEl = document.createElement("img");
        var cardTitleEl = document.createElement("p");

        cardImgEl.src = recipeImg
        cardTitleEl.textContent = recipeTitle

        document.querySelector(".card").appendChild(cardImgEl);
        document.querySelector(".card").appendChild(cardTitleEl);
        // cardImg.classList.add("meal-img");
        // cardImg.src = recipeImg;
        

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
  getMealCards();
})

// INITILIZATIONS