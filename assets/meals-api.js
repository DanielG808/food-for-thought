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
        
        for (i = 0; i < meals.length; i++) {
          var recipeTitle = meals[i].strMeal;
          var recipeImg = meals[i].strMealThumb;

          var imgDiv = document.createElement("div");
          var titleDiv = document.createElement("div");

          imgDiv.classList.add("card-section");
          titleDiv.classList.add("card-section");

          document.querySelector(".card").appendChild(imgDiv);
          document.querySelector(".card").appendChild(titleDiv);

          var cardImgEl = document.createElement("img");
          var cardTitleEl = document.createElement("p");
          // var cardLinkEl = document.createElement("");

          cardImgEl.classList.add("meal-img");
          cardImgEl.src = recipeImg
          cardTitleEl.textContent = recipeTitle

          document.querySelector(".card-section").appendChild(cardImgEl);
          document.querySelector(".card-section").appendChild(cardTitleEl);
        }

        
        

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