function openTab(evt, tabNumber) {
    // Declare all variables
    var i, tabcontent, tablinks; // why did they use var and also this is kind of different from how you write code, isn't?

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++ ) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace( " active", " "); // what is active here, is it a js thingy?
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabNumber).style.display = "block";
    evt.currentTarget.className += " active"; // is currentTarget also a js  thingy? 
}