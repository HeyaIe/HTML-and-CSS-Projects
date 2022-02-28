// Display modal
function openModal(){
    document.getElementById("myModal").style.display = "block";
}
// Close modal
function closeModal(){
    document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;

// Display current slide
function currentSlide(n){
    showSlides(slideIndex = n);
}

// Maneuver between slides using arrows
function plusSlides(n){
    showSlides(slideIndex += n);
}

function showSlides(n){
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");

    if(n>slides.length){
        slideIndex = 1;
    }
    if(n<1){
        slideIndex = slides.length;
    }
    // Set display none to slides and dots
    for(i=0; i<slides.length; ++i){
        slides[i].style.display = "none";
    }
    for(i=0; i<dots.length; ++i){
        dots[i].className = dots[i].className.replace(" active", "");
    }

    // Display single slide
    slides[slideIndex-1].style.display = "block";
    // Display active dot, opacity 1
    dots[slideIndex-1].className += " active";
}