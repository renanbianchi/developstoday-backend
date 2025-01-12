import { Request, Response } from "express";
import GetCountryInfoUseCase from "./GetCountryInfoUseCase";

export default class GetCountryInfoController {
  private getCountryInfoUseCase: GetCountryInfoUseCase;

  constructor(getCountryInfoUseCase: GetCountryInfoUseCase) {
    this.getCountryInfoUseCase = getCountryInfoUseCase;
  }

  async handle(req: Request, res: Response): Promise<Response> {
    const { countryCode, countryName } = req.body;

    try {
      const { countryBorders } = await this.getCountryInfoUseCase.getCountryBorders(countryCode);

      const { populationData } = await this.getCountryInfoUseCase.getCountryPopulation(countryName);

      const { countryFlag } = await this.getCountryInfoUseCase.getCountryFlag(countryCode);

      return res.status(200).json({ countryBorders, countryFlag, populationData });
    }
    catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Error fetching countries" });
    }
  }
}