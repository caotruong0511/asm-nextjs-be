import { Router } from "express";
import { create, list, read, remove, update } from "../controllers/product";


const router = Router();

router.get("/product",list);
router.get("/product/:id",read);
router.delete("/product/:id",remove);
router.post("/product",create);
router.put("/product/:id",update);


module.exports = router;
