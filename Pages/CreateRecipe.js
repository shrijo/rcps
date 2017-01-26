var Observable = require('FuseJS/Observable');

var name = Observable();
var description = Observable();

function submit() {
    fetch('https://deels-e8257.firebaseio.com/recipes.json', {
        method: 'POST',
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ 
            "name": name.value,
            "description": description.value
        })
    });

    // tear down
    name.value = "";
    description.value = "";
    goBack();
}


function goBack() {
    router.goBack();
}

module.exports = {
    name: name,
    description: description,

    goBack: goBack,
    submit: submit
};