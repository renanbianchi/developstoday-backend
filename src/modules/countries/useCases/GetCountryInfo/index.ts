import GetCountryInfoUseCase from "./GetCountryInfoUseCase";
import GetCountryInfoController from "./GetCountryInfoController";

export default async function GetCountryInfo() {
  const getCountryInfoUseCase = new GetCountryInfoUseCase();

  const getCountryInfoController = new GetCountryInfoController(getCountryInfoUseCase)

  return { getCountryInfoController };
}
