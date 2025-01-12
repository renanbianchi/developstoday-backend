import GetAllCountriesUseCase from "./GetAllCountriesUseCase";
import GetAllCountriesController from "./GetAllCountriesController";

export default async function GetAllCountries() {
  const getAllCountriesUseCase = new GetAllCountriesUseCase();

  const getAllCountriesController = new GetAllCountriesController(getAllCountriesUseCase)

  return { getAllCountriesController };
}
