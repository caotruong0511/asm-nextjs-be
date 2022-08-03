import { Router } from "express";
import { create, list, read, remove, update, getByUser } from "../controllers/order";

const router = Router();

router.get("/order", list);
router.get("/order/getByUser/:userId", getByUser);
router.get("/order/:id", read);
router.delete("/order/:id", remove);
router.post("/order", create);
router.put("/order/:id", update);

module.exports = router;
