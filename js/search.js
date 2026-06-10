document.addEventListener("DOMContentLoaded", () => {

    const searchBtn =
        document.getElementById("searchBtn");

    const searchInput =
        document.getElementById("searchInput");

    searchBtn.addEventListener(
        "click",
        searchCountry
    );

    searchInput.addEventListener(
        "keypress",
        (event) => {

            if (event.key === "Enter") {
                searchCountry();
            }

        }
    );

    async function searchCountry() {

        const countryName =
            searchInput.value.trim();

        if (!countryName) {

            alert("Please enter a country");

            return;
        }

        document.getElementById(
            "countryCard"
        ).innerHTML =
            "<p>Loading...</p>";

        const country =
            await fetchCountry(countryName);

        if (country) {

            console.log(country);

            displayCountry(country);

        }
    }

});