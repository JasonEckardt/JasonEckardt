function ValidateForm() {
    var error = false;

    var f_name = document.getElementById("name");
    var f_favorite_food = document.getElementById("favorite_food");
    var f_hair_color = document.querySelector('input[name="hair_color"]:checked');
    var hobby_cbs = document.getElementsByName("hobby");
    var numChecked = 0;
    var f_hobby = document.querySelector('input[name="hobby"]:checked');

    function ReturnError(errorMessage) {
        alert(errorMessage);
        error = true;
        return false;
    }

    for (var i = 0, max = hobby_cbs.length; i < max; i++) {
        if (hobby_cbs[i].checked) {
            numChecked++;
        }
    }

    if (f_name.value.length < 5) { // Issue: Does not check if name is whitespace.
        ReturnError("Please enter your full name. Must contain at least five characters.");
    } else if (f_favorite_food.value == "default") {
        ReturnError("Please select your favorite food.");
    } else if (!f_hair_color) {
        ReturnError("Please select your hair color.");
    } else if (numChecked < 2) { // Number of checkboxes (hobby_cbs)
        ReturnError("Please select at least two hobbies.");
    } else {
        alert("Your form is complete!");
        console.log("Entered name is: " + f_name.value);
        console.log("Favorite food is: " + f_favorite_food.value);
        console.log("Hair color is: " + f_hair_color.value);
        console.log("One favorite hobby is: " + f_hobby.value);
    }
}

function ResetForm() {
    document.getElementById('form').reset;
}
