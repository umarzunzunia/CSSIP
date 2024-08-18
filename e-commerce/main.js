const categories = [
    { name: "Gaming Accessories" ,link: "gaming.html" },
    { name: "Headset" ,link: "gaming.html" },
    { name: "KeyBoard" ,link: "gaming.html" },
     { name: "Computer Mice" ,link: "gaming.html" },
     { name: "Chairs" ,link: "gaming.html" },
    { name: "Jeans", link: "dress.html" },
    { name: "Tops", link: "dress.html" },
    { name: "Dress", link: "dress.html" },
    { name: "Refresh Your Space", link: "refresh.html" },
    { name: "Dining", link: "refresh.html" },
    { name: "Home", link: "refresh.html" },
    { name: "Kitchen", link: "refresh.html" },
    { name: "Health and Beauty", link: "beauty.html" },
    { name: "Fashion Trends You Like", link: "fashion.html" },
    { name: "Dresses", link: "fashion.html" },
    { name: "Knits", link: "fashion.html" },
    { name: "Jackets", link: "fashion.html" },
    { name: "Jewelery", link: "fashion.html" },
    { name: "Deals in PCs", link: "deals.html" },
    { name: "Toys", link: "toys.html" },
    { name: "Beauty steals", link: "beauty.html" },
    { name: "Deals on shoes", link: "shoes.html" }
];

function performSearch() {
    const query = document.getElementById('ss').value.toLowerCase();
    const resultsDiv = document.getElementById('search-results');
    resultsDiv.innerHTML = '';
    const results = categories.filter(category => 
        category.name.toLowerCase().includes(query)
    );

    if (results.length > 0) {
        results.forEach(result => {
            const resultItem = document.createElement('a');
            resultItem.href = result.link;
            resultItem.textContent = result.name;
            resultsDiv.appendChild(resultItem);
        });
        resultsDiv.style.display = 'block';
    } else {
        resultsDiv.innerHTML = 'No results found.';
        resultsDiv.style.display = 'block'; 
    }

    return false; 
}

function showSuggestions() {
    const query = document.getElementById('ss').value.toLowerCase();
    const resultsDiv = document.getElementById('search-results');
    resultsDiv.innerHTML = '';

    if (query.length > 0) {
        const results = categories.filter(category =>
            category.name.toLowerCase().includes(query)
        );

        if (results.length > 0) {
            results.forEach(result => {
                const resultItem = document.createElement('a');
                resultItem.href = result.link;
                resultItem.textContent = result.name;
                resultsDiv.appendChild(resultItem);
            });
            resultsDiv.style.display = 'block'; 
        } else {
            resultsDiv.innerHTML = 'No results found.';
            resultsDiv.style.display = 'block'; 
        }
    } else {
        resultsDiv.style.display = 'none';
    }
}


function selectCountry(country) {
    document.getElementById('current-country').innerHTML = '<i class="ri-map-pin-2-fill"></i> ' + country;
}


let image = document.getElementById('image');
let images = ['Images/s2.jpg', 'Images/s4.jpg', 'Images/s5.jpg', 'Images/s1.jpg'];
let currentIndex = 0;


setInterval(() => {
    image.src = images[currentIndex];
    currentIndex = (currentIndex + 1) % images.length;
}, 1800);

function selectCountry(country) {
    document.getElementById('current-country').innerHTML = '<i class="ri-map-pin-2-fill"></i> ' + country;
}


document.addEventListener('DOMContentLoaded', () => {
    let image = document.getElementById('image');
    let images = ['Images/s2.jpg', 'Images/s4.jpg', 'Images/s5.jpg', 'Images/s1.jpg'];
    let currentIndex = 0;

    setInterval(() => {
        image.src = images[currentIndex];
        currentIndex = (currentIndex + 1) % images.length;
    }, 1800);
});
