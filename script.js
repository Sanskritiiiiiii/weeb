function search() {
    const searchText = document.getElementById('searchInput').value.toLowerCase().trim();
    if (searchText) {
        // Define search terms and their corresponding URLs
        const searchTerms = {
            "ieee": "https://www.ieee.org/",
            "ieee xplore": "https://ieeexplore.ieee.org/Xplore/home.jsp",
            "ieee standards": "https://standards.ieee.org/",
            "ieee spectrum": "https://spectrum.ieee.org/",
            "ieee mp section": "https://ieeemp.org/",
            "what is ieee":"https://www.ieee.org/",
            "how to join ieee":"/ https://www.ieee.org/membership/join/index.html",
            "what are the benifits of ieee":"https://www.ieee.org/membership/benefits/index.html"
        };

        // Check if the search term exists in the searchTerms object
        if (searchTerms.hasOwnProperty(searchText)) {
            // Redirect to the corresponding URL
            window.open(searchTerms[searchText], '_blank');
        } else {
            // If no matching search term is found, display an alert
            alert('No matching link found.');
        }
    } else {
        // If no search term is provided, display an alert
        alert('Please enter a search term.');
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.querySelector('.search-bar');
    const searchButton = document.querySelector('.search-button');

    // Function to perform search
    function performSearch() {
        const searchText = searchInput.value.toLowerCase().trim();
        if (searchText) {
            // Open search results in a new tab
            window.open("https://www.ieee.org/search/searchResult.html?q=" + searchText, '_blank');
        } else {
            alert('Please enter a search term.');
        }
    }

    // Event listener for clicking the search button
    searchButton.addEventListener('click', performSearch);

    // Event listener for pressing Enter key in the search bar
    searchInput.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            performSearch();
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('searchInput');
    const dropdownContent = document.querySelector('.dropdown-content-search');

    searchInput.addEventListener('focus', function () {
        dropdownContent.style.display = 'block';
    });

    searchInput.addEventListener('blur', function () {
        // Hide dropdown when focus is lost
        dropdownContent.style.display = 'none';
    });
});


// JavaScript to close the dropdown when clicking outside of it
document.addEventListener("click", function(event) {
    var dropdowns = document.getElementsByClassName("dropdown-content-search");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
        var dropdownContent = dropdowns[i];
        if (!event.target.matches('.dropdown-search')) {
            if (dropdownContent.style.display === 'block') {
                dropdownContent.style.display = 'none';
            }
        }
    }
});
