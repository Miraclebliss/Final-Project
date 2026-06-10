function displayCountry(country) {

    const countryCard = document.getElementById("countryCard");

    const currencyCode = Object.keys(country.currencies)[0];

    const currencyName =
        country.currencies[currencyCode].name;

    const languages =
        Object.values(country.languages).join(", ");

    countryCard.innerHTML = `
    
        <img
            src="${country.flags.png}"
            alt="${country.name.common}"
        >

        <h3>${country.name.common}</h3>

        <p>
            <strong>Capital:</strong>
            ${country.capital ? country.capital[0] : "N/A"}
        </p>

        <p>
            <strong>Population:</strong>
            ${country.population.toLocaleString()}
        </p>

        <p>
            <strong>Region:</strong>
            ${country.region}
        </p>

        <p>
            <strong>Currency:</strong>
            ${currencyName}
        </p>

        <p>
            <strong>Languages:</strong>
            ${languages}
        </p>

        <button id="favoriteBtn">
            Add To Favorites
        </button>
    `;
}