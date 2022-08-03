import { Router } from "express";
import { createNews, listNews, readNews, removeNews, updateNews, getBySlug } from "../controllers/news";
import { isAdmin, isAuth, requireSignin } from "../middlewares/checkAuth";

const router = Router();

router.get("/news/:slug/getBySlug", getBySlug);
router.get("/news", listNews);
router.get("/news/:id", readNews);
router.delete("/news/:id", requireSignin, isAuth, isAdmin, removeNews);
router.post("/news", requireSignin, isAuth, isAdmin, createNews);
router.put("/news/:id", requireSignin, isAuth, isAdmin, updateNews);

module.exports = router;
