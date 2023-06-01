// Search Bar

// Vars
const toggleSearch = (search, button) => {
    const searchBar = document.getElementById(search),
        searchButton = document.getElementById(button)

    searchButton.addEventListener('click', () => {
        // add show search class for bar expansion
        searchBar.classList.toggle('show-search')
    })
}

toggleSearch('search-bar', 'search-button');

// End Search Bar