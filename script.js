// Function to handle tab switching
function openTab(event, tabName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tab-content" and hide them
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].classList.remove('show'); // Hide all tab contents
    }

    // Get all elements with class="tab-button" and remove the class "active"
    tablinks = document.getElementsByClassName("tab-button");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).classList.add('show');
    event.currentTarget.classList.add("active");
}

// Set default tab to show when the page loads
document.addEventListener('DOMContentLoaded', function() {
    // By default, open the 'Experience' tab
    document.querySelector('.tab-button').click();
});
