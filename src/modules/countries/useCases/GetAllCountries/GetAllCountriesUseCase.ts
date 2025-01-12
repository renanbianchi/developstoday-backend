import GetAllCountries from "@services/getAllCountries";

export default class GetAllCountriesUseCase {
  async getAllCountries() {
    try {
      const countries = await GetAllCountries();
      return countries;
    }
    catch (error) {
      console.log(error);
      throw new Error("Error fetching countries");
    }
  }
}