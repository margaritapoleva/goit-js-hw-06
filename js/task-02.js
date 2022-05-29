const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsItems = ingredients.map(element => {
  const ingredient = document.createElement("li");
  console.log(ingredient);
  ingredient.textContent = element;
  ingredient.classList.add(".item")
  
  return ingredient
});


console.log(ingredientsItems);

const ingredientsList = document.querySelector("ul");

ingredientsList.append(...ingredientsItems);
