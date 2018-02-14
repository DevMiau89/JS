/**
 * Created by DevMiau on 13-Feb-18.
 */
function cakes(recipe, available) {
  // TODO: insert code
  let result = [];

  for(let property in recipe){
    let recipeProperty = recipe[property] || 0;
    let availableProperty = available[property] || 0;

    if(recipeProperty > 0){
      result.push(Math.floor(availableProperty/recipeProperty))
    }
  }

  return Math.min.apply(null, result);
}