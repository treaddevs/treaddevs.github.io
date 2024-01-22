// Detecting Button Press
var buttons = document.querySelectorAll(".buttons button");

for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function(){
        var url = this.dataset.url; // Get URL from data attribute
        buttonAnimation(this, function() {
            // Uncomment the following line to enable navigation after animation
            navigateTo(url);
        });
    });
}

function buttonAnimation(clickedButton, callback) {
    clickedButton.classList.add("pressed");

    setTimeout(function() {
        clickedButton.classList.remove("pressed");
        // Call the callback function after the animation is complete
        if (callback) {
            callback();
        }
    }, 100); // Adjust the duration as needed
}

// Uncomment the following function for navigation
function navigateTo(url) {
    setTimeout(function() {
        window.location.href = url;
    }, 200); // Adjust the duration to allow time for the animation
}