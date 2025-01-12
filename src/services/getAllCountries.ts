export default async function getAllCountries() {
  try {
    const allCountries = await fetch("https://date.nager.at/api/v3/AvailableCountries");
    const countries = await allCountries.json();
    return countries;
  }
  catch (error) {
    console.log(error);
    throw new Error("Error fetching countries");
  }
}