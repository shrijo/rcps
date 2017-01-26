var Observable = require("FuseJS/Observable");
var firebaseAPI = require('firebaseAPI');

var recipesList = Observable();

function goToCreateRecipe() {
	router.push("createRecipe");
};

function refresh() {
	setTimeout(() => {
		firebaseAPI.get('recipes', recipesList);
	}, 5000)
	
}

firebaseAPI.get('recipes', recipesList);


module.exports = {
	refresh,
	recipesList,

	goToCreateRecipe
};