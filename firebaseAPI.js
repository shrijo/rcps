function get(dataType, list) {
	fetch(`https://deels-e8257.firebaseio.com/${dataType}.json`, {
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
				if (index >= list.length) {
					var value = data[key];
					list.add(value);
				}
			})
		});
}

function postNewRecipe(name, description) {
    fetch(`https://deels-e8257.firebaseio.com/recipes.json`, {
        method: 'POST',
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ 
            "name": name.value,
            "description": description.value
        })
    });
}

module.exports = {
    get,
    postNewRecipe
}