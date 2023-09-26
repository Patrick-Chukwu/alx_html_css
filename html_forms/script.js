let form = document.getElementById("myForm");
form.addEventListener("submit", function(event){

    //prevents  subission if validation is incorrect.
    if (!isValid) {
        event.preventDefault();
    }
});

