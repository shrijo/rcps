var Observable = require('FuseJS/Observable');
var firebaseAPI = require('firebaseAPI');
var recipeList = require('Pages/CardsOverview')

var name = Observable();
var description = Observable();


function submit() {
    firebaseAPI.postNewRecipe(name, description);
    recipeList.add();
    // tear down
    name.value = "";
    description.value = "";
    goBack();
}


function goBack() {
    router.goBack();
}

module.exports = {
    name,
    description,

    goBack,
    submit
};