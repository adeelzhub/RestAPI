const {Router} = require("express")
const userRouter = Router();


const { addBreed, listCats, findCat, updateCat, deleteCat } = require("../controller");
const { hashPassword, deHashPassword } = require("../middleware");
const { addUser, loginUser, deleteUser, updateUser, listUsers } = require("../users");

userRouter.post("/cat", addBreed);
userRouter.get("/cats", listCats);
userRouter.get("/cat/:breed", findCat);
userRouter.patch("/cats/update", updateCat);
userRouter.delete("/cat/:breed", deleteCat);
userRouter.post("/user", hashPassword, addUser);
userRouter.get("/users", listUsers);
userRouter.post("/user/login",deHashPassword, loginUser);
// userRouter.patch("/user/update", updateUser);
userRouter.delete("user",deHashPassword, deleteUser);


module.exports = userRouter;