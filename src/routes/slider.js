import { Router } from "express";
import { create, list, read, remove, update } from "../controllers/slider";
import { isAdmin, isAuth, requireSignin } from "../middlewares/checkAuth";

const router = Router();

router.get("/slider", list);
router.get("/slider/:id", read);
router.delete("/slider/:id", requireSignin, isAuth, isAdmin, remove);
router.post("/slider", requireSignin, isAuth, isAdmin, create);
router.put("/slider/:id", requireSignin, isAuth, isAdmin, update);

module.exports = router;
