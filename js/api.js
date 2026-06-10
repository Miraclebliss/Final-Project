const BASE_URL = "https://restcountries.com/v3.1/name/";

async function fetchCountry(countryName) {
    try {
        const response = await fetch(`${BASE_URL}${countryName}`);

        if (!response.ok) {
            throw new Error("Country not found");
        }

        const data = await response.json();

        return data[0];
    } catch (error) {
        console.error(error);
        alert(error.message);
    }
}