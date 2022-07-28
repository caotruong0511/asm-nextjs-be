import { Router } from "express";
import { create, getComment, list, read, remove, update } from "../controllers/product";
import { isAdmin, isAuth, requireSignin } from "../middlewares/checkAuth";

const router = Router();

router.get("/product", list);
router.get("/product/:id/comment", getComment);
router.get("/product/:id", read);
router.delete("/product/:id", requireSignin, isAuth, isAdmin, remove);
router.post("/product", requireSignin, isAuth, isAdmin, create);
router.put("/product/:id", requireSignin, isAuth, isAdmin, update);

module.exports = router;
