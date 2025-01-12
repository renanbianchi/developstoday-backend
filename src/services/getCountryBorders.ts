export default async function getCountryBorders(countryCode: string) {
  try {
    const countryBordersFetch = await fetch(`https://date.nager.at/api/v3/CountryInfo/${countryCode}`);

    const countryBorders = await countryBordersFetch.json();

    return {
      countryBorders,
    };
  }
  catch (error) {
    console.log(error);
    throw new Error("Error fetching country borders");
  }
}