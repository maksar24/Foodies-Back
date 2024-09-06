import { Router } from "express";
import authenticate from "../middleware/authenticate.js";
import recipesControllers from "../controllers/recipesControllers.js";

const recipesRouter = Router();

recipesRouter.use(authenticate);

recipesRouter.get("/", recipesControllers.getAllRecipes);

recipesRouter.get("/favorite", recipesControllers.getFavoriteRecipes);

recipesRouter.get("/:id", recipesControllers.getOneRecipe);

export default recipesRouter;
