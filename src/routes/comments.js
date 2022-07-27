import { Router } from "express";
import { create, list, read, remove, update } from "../controllers/comments";
import { isAdmin, isAuth, requireSignin } from "../middlewares/checkAuth";

const router = Router();

router.get("/comment", list);
router.get("/comment/:id", read);
router.delete("/comment/:id", isAdmin, isAuth, remove);
router.post("/comment", create);
router.put("/comment/:id", isAuth, update);

module.exports = router;
