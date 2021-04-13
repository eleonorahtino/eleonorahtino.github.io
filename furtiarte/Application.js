// Script to open and close sidebar
function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("myOverlay").style.display = "block";
}

function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("myOverlay").style.display = "none";
}

// Modal Image Gallery
function onClick(element) {
    document.getElementById("img01").src = element.src;
    document.getElementById("modal01").style.display = "block";
    var captionText = document.getElementById("caption");
    captionText.innerHTML = element.alt;
}

var c = 0.00063;
setInterval(myFunction, 1000);

function myFunction() {
    document.getElementById("demo").innerHTML = c  ;
    c = c + 0.00063;
}

var c2 = 0.038;
setInterval(myFunction2, 60000);

function myFunction2() {
    document.getElementById("demo2").innerHTML = c2;
    c2 = c2 + 0.038;
}



