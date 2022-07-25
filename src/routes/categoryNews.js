import { Router } from "express";
import {
  createCategoryNews,
  listCategoryNews,
  readCategoryNews,
  removeCategoryNews,
  updateCategoryNews,
} from "../controllers/categoryNews";

const router = Router();

router.get("/categoryNews", listCategoryNews);
router.get("/categoryNews/:id", readCategoryNews);
router.delete("/categoryNews/:id", removeCategoryNews);
router.post("/categoryNews", createCategoryNews);
router.put("/categoryNews/:id", updateCategoryNews);

module.exports = router;
