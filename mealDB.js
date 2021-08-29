const SearchFood=() =>{
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
   // console.log(searchText);

   //clear data
    searchField.value='';
if(searchText == ''){
  //please write something to display
}
else{
 //load data
 const url=`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
 //console.log(url);
 fetch(url)
 .then(res => res.json())
 .then(data => displaySearchResult(data.meals));

}
  }
  const displaySearchResult= meals =>{
    const searchResult = document.getElementById('search-result');
    // searchResult.innerHTML='';
     searchResult.textContent='';
    // for(const meal of meals)
    if (meals.length == 0){

    }
    meals.forEach(meal => {
         //console.log(meal);
        const div=document.createElement('div');
        div.classList.add('col');
        // id deal variable declare kora jay na,tai dynamic vabe desa
        div.innerHTML=`
        <div onclick="loadMealDetail(${meal.idMeal})" class="card h-100">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">${meal.strMeal}</h5>
            <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
        </div>
      </div>
        `;
        searchResult.appendChild(div);
    });
  
  }
  const loadMealDetail = mealId =>{
    // console.log(mealId);
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
    fetch(url)
    .then(res =>res.json())
    .then(data => displayMealDetail(data.meals[0]));
  }
  const displayMealDetail = meal =>{
    console.log(meal);
    const mealDetails = document.getElementById('mealDetails');
    const  div=document.createElement('div');
    div.classList.add('card');
    div.innerHTML=`
    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${meal.strMeal}</h5>
            <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
            <a href="${meal.strYoutube}" class="btn btn-primary">Go somewhere</a>
          </div>
    `;
    mealDetails.appendChild(div);
  }