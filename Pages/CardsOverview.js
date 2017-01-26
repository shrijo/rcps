var Observable = require("FuseJS/Observable");

var name = Observable();
var description = Observable();
var dbData = Observable();

function goToCreateRecipe() {
	router.push("createRecipe");
};

function fetchFromFirebase() {
	fetch('https://deels-e8257.firebaseio.com/recipes.json', {
		method: 'GET',
		cache: 'default',
		headers: { "Content-type": "application/json" }
	})

		.then(function (result) {
			if (result.status !== 200) {
				console.log("Something went wrong :(");
				return;
			}
			return result.json();
		})

		.then(function (data) {
			var keys = Object.keys(data);
			keys.forEach(function (key, index) {
				if (index >= dbData.length) {
					var value = data[key];
					dbData.add(value);
				}
			})
		});
}

fetchFromFirebase();

module.exports = {
	name: name,
	description: description,
	dbData: dbData,

	goToCreateRecipe: goToCreateRecipe,
	fetchFromFirebase: fetchFromFirebase
};
