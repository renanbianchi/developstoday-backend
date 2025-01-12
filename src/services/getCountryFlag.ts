export default async function getCountryFlag(countryCode: string) {
  try {
    const countryFlagFetch = await fetch(`https://countriesnow.space/api/v0.1/countries/flag/images`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        iso2: countryCode
      }),
    });

    const countryFlag = await countryFlagFetch.json();

    return {
      countryFlag,
    };
  }
  catch (error) {
    console.log(error);
    throw new Error("Error fetching country Flag");
  }
}