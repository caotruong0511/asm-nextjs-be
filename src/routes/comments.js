import { Router } from "express";
import { create, list, read, remove, update, getByProduct } from "../controllers/comments";
import { isAdmin, isAuth, requireSignin } from "../middlewares/checkAuth";

const router = Router();

router.get("/comment", list);
router.get("/comment/getByProduct/:slug", getByProduct);
router.get("/comment/:id", read);
router.delete("/comment/:id", requireSignin, isAuth, remove);
router.post("/comment", requireSignin, isAuth, create);
router.put("/comment/:id", requireSignin, isAuth, update);

module.exports = router;
