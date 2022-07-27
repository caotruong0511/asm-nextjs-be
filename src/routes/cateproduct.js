import { Router } from "express";
import { create, list, read, remove, update } from "../controllers/cateproduct";
import { isAdmin, isAuth, requireSignin } from "../middlewares/checkAuth";

const router = Router();

router.get("/cateproduct", list);
router.get("/cateproduct/:id", read);
router.delete("/cateproduct/:id", requireSignin, isAuth, isAdmin, remove);
router.post("/cateproduct", requireSignin, isAuth, isAdmin, create);
router.put("/cateproduct/:id", requireSignin, isAuth, isAdmin, update);

module.exports = router;
