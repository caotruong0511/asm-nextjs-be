import { Router } from "express";
import { createNews, listNews, readNews, removeNews, updateNews } from "../controllers/news";

const router = Router();

router.get("/news", listNews);
router.get("/news/:id", readNews);
router.delete("/news/:id", removeNews);
router.post("/news", createNews);
router.put("/news/:id", updateNews);

module.exports = router;
