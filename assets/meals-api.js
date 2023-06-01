// DEPENEDENCIES

var recipeCardEl = document.getElementsByClassName("card-section");

var searchInputEl = document.querySelector(".search__input");
var searchButtonEl = document.querySelector("#search-button");


// DATA

//FUNCTIONS

function getMealCards() {

    var requestUrl = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchInputEl.value}`

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

        
        var recipeTitle = meals[i].strMeal;
        var recipeImg = meals[i].strMealThumb;
        // generates a card for the recipe info to live
        var recipeCard = document.createElement("div");
        var imgDiv = document.createElement("div");
        var titleDiv = document.createElement("div");
        var cardImgEl = document.createElement("img");
        var cardTitleEl = document.createElement("p");
        
        imgDiv.classList.add("card-section");
        titleDiv.classList.add("card-section");
        recipeCard.classList.add("card");
        cardImgEl.classList.add("meal-img");
        cardImgEl.src = recipeImg
        cardTitleEl.textContent = recipeTitle

        document.querySelector(".card-container").appendChild(recipeCard);
        recipeCard.appendChild(imgDiv);
        recipeCard.appendChild(titleDiv);
        imgDiv.appendChild(cardImgEl);
        titleDiv.appendChild(cardTitleEl);

        recipeCard.addEventListener("click" , function(event) {
          console.log("ya clicked a recipe...CONGRATS!");
          getMealRecipe(mealId);
        })
        }    
    })
}

function getMealRecipe(id) {
  var requestUrl = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
        
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

searchInputEl.addEventListener("keydown", function (e) {
  if (e.code === 'Enter') {
    e.preventDefault();
    console.log("button clicked!");
    getMealCards();
    searchInputEl.value = ""
  }
})

// INITILIZATIONS