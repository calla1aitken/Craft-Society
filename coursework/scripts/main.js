function send_form(submittedId, submittedText){
    var submitted = document.getElementById(submittedId);
    submitted.innerHTML = submittedText;
}

var counter = 0;
function login(button){
    var email = document.forms["login-form"]["login-email"].value;
    var password = document.forms["login-form"]["password"].value;
    document.forms["login-form"]["login-email"].value = "";
    document.forms["login-form"]["password"].value = "";

    if(counter % 2 == 0 && email == "" || counter % 2 == 0 && password == ""){ //If counter is even, the user is logged in
        alert('You must enter your details');
        
    } else if (counter % 2 == 0){
        alert('You have been logged in!');
        var button = document.getElementById(button);
        button.innerHTML = "Log Out"; //Text changes to reflect whether use is logged in or out
        counter += 1;
    }else { //If counter is odd, user is logged out
        alert('You have been logged out!');
        var button = document.getElementById(button);
        button.innerHTML = "Login"; //Text changes to reflect whether use is logged in or out
        counter += 1;
    }
    
}

function imgGallery() {
    document.addEventListener("DOMContentLoaded", function () { //function can only run when html and js pages are loaded
        var galleryImages = document.querySelectorAll(".gallery-photo");
        
        galleryImages.forEach(function(image) {
            image.addEventListener("mouseover", highlight); //outlines image when selected
            image.addEventListener("mouseout", delight); //removes outline when image is not selected
        });
    
        function highlight(event){
            event.target.style.border = "solid #8f4218 10px";
            event.target.style.cursor ="pointer"
        }
    
        function delight(event){
            event.target.style.border = "none";
        }
    });
}
//Calls the image gallery function
imgGallery();

function submit_event() {
    var title = document.forms["events"]["event-title"].value;
    var date = document.forms["events"]["event-date"].value;
    document.forms["events"]["event-title"].value = "";
    document.forms["events"]["event-date"].value = "";
    document.forms["events"]["event-desc"].value = "";
    if (title == "") {
        alert("An event must have a title!");
    }
    else {
        if (date.length == 0) {
            alert("An event must have a date!");
        }
        else {
            alert("Event submitted! The society will contact you soon!");
        }
    }
}
    