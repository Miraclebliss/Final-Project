const searchBtn = document.getElementById('search-btn');
const searchInput = document.getElementById('search-input');
const searchResults = document.getElementById('search-results');
searchBtn.addEventListener(
"click",
searchCountry
);
async function searchCountry(){

    const country = searchInput.value.trim();
    if(country === ""){
        alert("Enter country");
        return;
    }
}
const data = await fetchCountry(country);
