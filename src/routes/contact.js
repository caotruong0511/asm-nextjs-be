import { Router } from "express";
import { create, list, read, remove } from "../controllers/contact";

const router = Router();

router.get("/contact", list);
router.get("/contact/:id", read);
router.delete("/contact/:id", remove);
router.post("/contact", create);

module.exports = router;
