function getMealApi() {
    console.log("got dat API");

    var requestUrl = 'https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast'
    fetch(requestUrl)
    .then(function (response) {
      console.log(response);
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      var meals = data.meals
      for (i = 0; i < meals.length; i++) {
        mealId = meals[i].idMeal;
        console.log("This is a meal ID => " + mealId);
      }       
    })
}

getMealApi();

