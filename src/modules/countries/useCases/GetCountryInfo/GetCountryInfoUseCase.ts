import getCountryBorders from "@services/getCountryBorders";
import getCountryFlag from "@services/getCountryFlag";
import getCountryPopulation from "@services/getCountryPopulation";

export default class GetCountryInfoUseCase {
  async getCountryBorders(countryCode: string) {
    try {
      const countries = await getCountryBorders(countryCode);
      return countries;
    }
    catch (error) {
      console.log(error);
      throw new Error("Error fetching countries");
    }
  }

  async getCountryFlag(countryCode: string) {
    try {
      const countries = await getCountryFlag(countryCode);
      return countries;
    }
    catch (error) {
      console.log(error);
      throw new Error("Error fetching countries");
    }
  }

  async getCountryPopulation(countryName: string) {
    try {
      const countries = await getCountryPopulation(countryName);
      return countries;
    }
    catch (error) {
      console.log(error);
      throw new Error("Error fetching countries");
    }
  }
}