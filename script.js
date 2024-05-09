// Functions that when clicked lead to next page

function openDoor1() {
    // Redirect to story Ostuni
    window.location.href = "MP_ostuni.html";
}

function openDoor2() {
    // Redirect to MP Diary
    window.location.href = "Diary.html";
}

function openDoor3() {
    // Redirect to Ostuni
    window.location.href = "ostuni.html";
}

// Functions that highlight a defined clickable area
function highlightDoor1() {
    document.getElementById("story_ostuni").style.boxShadow = "0 0 10px 5px red";  // Change shadow color and size
    document.getElementById("summaryBox1").style.display = "block"; // Show summary box
}

function highlightDoor2() {
    document.getElementById("diary").style.boxShadow = "0 0 10px 5px red";  // Change shadow color and size
    document.getElementById("summaryBox2").style.display = "block"; // Show summary box
}

function highlightDoor3() {
    document.getElementById("ostuni").style.boxShadow = "0 0 10px 5px red";  // Change shadow color and size
    document.getElementById("summaryBox3").style.display = "block"; // Show summary box
}

// Functions that unhighlight a defined clickable area
function unhighlightDoor1() {
    document.getElementById("story_ostuni").style.boxShadow = "none";
    document.getElementById("summaryBox1").style.display = "none"; // Hide summary box
}

function unhighlightDoor2() {
    document.getElementById("diary").style.boxShadow = "none";
    document.getElementById("summaryBox2").style.display = "none"; // Hide summary box
}

function unhighlightDoor3() {
    document.getElementById("ostuni").style.boxShadow = "none";
    document.getElementById("summaryBox3").style.display = "none"; // Hide summary box
}

// Limiting characters and adding ellipsis to summary text - separate for each summaryBox
// Call the function when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Limiting characters and adding ellipsis to summary text - separate for each summaryBox
    var maxLength = 100; // Change the maximum length as needed
    var summaryText1 = document.getElementById("summaryBox1");

    if (summaryText1.innerHTML.length > maxLength) {
        summaryText1.innerHTML = summaryText1.innerHTML.substring(0, maxLength) + '...';
    }

    var summaryText2 = document.getElementById("summaryBox2");

    if (summaryText2.innerHTML.length > maxLength) {
        summaryText2.innerHTML = summaryText2.innerHTML.substring(0, maxLength) + '...';
    }

    var summaryText3 = document.getElementById("summaryBox3");

    if (summaryText3.innerHTML.length > maxLength) {
        summaryText3.innerHTML = summaryText3.innerHTML.substring(0, maxLength) + '...';
    }

    // Highlighting clickable areas
    unhighlightDoor1();
    unhighlightDoor2();
    unhighlightDoor3();
});