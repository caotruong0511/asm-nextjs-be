import { Router } from "express";
import { create, list, read, remove, update } from "../controllers/orderDetail";

const router = Router();

router.get("/orderDetail", list);
router.get("/orderDetail/:id", read);
router.delete("/orderDetail/:id", remove);
router.post("/orderDetail", create);
router.put("/orderDetail/:id", update);

module.exports = router;
