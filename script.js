function showTab(tabId) {
    // Hide all tabs
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => {
        tab.classList.remove('active');
    });

    // Show the selected tab
    const selectedTab = document.getElementById(tabId);
    selectedTab.classList.add('active');
}

// Add smooth transitions for tab content
const tabContents = document.querySelectorAll('.tab-content');
const tabNavigation = document.querySelectorAll('.tab');

// Wait for document to load before adding event listeners
document.addEventListener('DOMContentLoaded', function () {
    tabContents.forEach(tab => {
        tab.style.transition = 'opacity 0.5s ease-in-out';
    });

    // Apply event listeners to each tab
    tabNavigation.forEach(tab => {
        tab.addEventListener('click', function () {
            // Apply fade-out effect for all tabs before showing the active tab
            tabContents.forEach(content => {
                content.style.opacity = '0';
            });

            setTimeout(() => {
                showTab(tab.dataset.tab);
                // Apply fade-in effect for active tab
                selectedTab.style.opacity = '1';
            }, 300); // Timeout to allow fade-out before fade-in
        });
    });
});
