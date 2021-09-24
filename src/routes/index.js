const {Router} = require("express")
const userRouter = Router();


const { addBreed, listCats, updateCat, deleteCat } = require("../controller");

userRouter.post("/cat", addBreed);
userRouter.get("/cats", listCats);
userRouter.patch("/cats/update", updateCat);
userRouter.delete("/cat/:breed", deleteCat)


module.exports = userRouter;