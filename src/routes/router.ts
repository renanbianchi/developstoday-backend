import { Request, Response, Router } from "express";
import GetAllCountries from "@modules/countries/useCases/GetAllCountries";
import GetCountryInfo from "@modules/countries/useCases/GetCountryInfo";

const routes = Router();

routes.get("/all", async (req: Request, res: Response) => {
  try {
    const { getAllCountriesController } = await GetAllCountries();
    await getAllCountriesController.handle(req, res);
  } catch (error) {
    console.error("Error in route handler:", error);
    res.status(500).send("Internal Server Error");
  }
});

routes.post("/country", async (req: Request, res: Response) => {
  try {
    const { getCountryInfoController } = await GetCountryInfo();
    await getCountryInfoController.handle(req, res);
  } catch (error) {
    console.error("Error in route handler:", error);
    res.status(500).send("Internal Server Error");
  }
});
export default routes;