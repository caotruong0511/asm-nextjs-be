import { Router } from "express";
import {
  createCategoryNews,
  listCategoryNews,
  readCategoryNews,
  removeCategoryNews,
  updateCategoryNews,
} from "../controllers/categoryNews";
import { isAdmin, isAuth, requireSignin } from "../middlewares/checkAuth";

const router = Router();

router.get("/categoryNews", listCategoryNews);
router.get("/categoryNews/:id", readCategoryNews);
router.delete("/categoryNews/:id", requireSignin, isAuth, isAdmin, removeCategoryNews);
router.post("/categoryNews", requireSignin, isAuth, isAdmin, createCategoryNews);
router.put("/categoryNews/:id", requireSignin, isAuth, isAdmin, updateCategoryNews);

module.exports = router;
