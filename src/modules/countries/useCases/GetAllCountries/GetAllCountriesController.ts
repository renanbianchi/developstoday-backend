import { Request, Response } from "express";
import GetAllCountriesUseCase from "./GetAllCountriesUseCase";

export default class GetAllCountriesController {
  private getAllCountriesUseCase: GetAllCountriesUseCase;

  constructor(getAllCountriesUseCase: GetAllCountriesUseCase) {
    this.getAllCountriesUseCase = getAllCountriesUseCase;
  }

  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const countries = await this.getAllCountriesUseCase.getAllCountries();
      return res.status(200).json(countries);
    }
    catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Error fetching countries" });
    }
  }
}