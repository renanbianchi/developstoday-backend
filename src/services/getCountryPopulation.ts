export default async function getCountryPopulation(countryName: string) {
  try {
    const populationDataFetch = await fetch(`https://countriesnow.space/api/v0.1/countries/population`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        country: countryName
      }),
    });

    const populationData = await populationDataFetch.json();

    return {
      populationData,
    };
  }
  catch (error) {
    console.log(error);
    throw new Error("Error fetching countries");
  }
}