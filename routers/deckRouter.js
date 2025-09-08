import {Router} from "express";
import { addNewDeckHandler, getMyDecksHandler, getSingleDeck } from "../controllers/deckController.js";
import { isLoggedIn } from "../middlewares/isLoggedin.js";
const deckRouter = Router()

deckRouter.post("/",isLoggedIn, addNewDeckHandler)
deckRouter.get("/",isLoggedIn,getMyDecksHandler)
deckRouter.get("/:deckId",isLoggedIn,getSingleDeck)

export default deckRouter