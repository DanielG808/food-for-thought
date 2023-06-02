// Search Bar

// Vars
const toggleSearch = (search, button) =>{
    const searchBar = document.getElementById(search),
          searchButton = document.getElementById(button)
 
    searchButton.addEventListener('click', () =>{
        // We add the show-search class, so that the search bar expands
        searchBar.classList.toggle('show-search')
    });
 };

 toggleSearch('search-bar', 'search-button');

//  End Search Bar

// =================================================================== //

// Popup

document.getElementById('open-pop-btn').addEventListener('click', function () {
    document.getElementsByClassName('popup')[0].classList.add('active');
});

document.getElementById('return-pop-btn').addEventListener('click', function () {
    document.getElementsByClassName('popup')[0].classList.remove('active');
});

// End Popup