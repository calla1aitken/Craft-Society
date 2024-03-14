function send_form(submittedId, submittedText){
    var submitted = document.getElementById(submittedId);
    submitted.innerHTML = submittedText;
}

var counter = 0;
function login(button){
    if(counter % 2 == 0){ //If counter is even, the user is logged in
        alert('You have been logged in!');
        var button = document.getElementById(button);
        button.innerHTML = "Log Out"; //Text changes to reflect whether use is logged in or out
    }else { //If counter is odd, user is logged out
        alert('You have been logged out!');
        var button = document.getElementById(button);
        button.innerHTML = "Login"; //Text changes to reflect whether use is logged in or out
    }
    counter += 1;

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
        }
    
        function delight(event){
            event.target.style.border = "none";
        }
    });
}
//Calls the image gallery function
imgGallery();