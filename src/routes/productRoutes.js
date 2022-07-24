import { Router } from "express";
import { create, list, read, remove, update } from "../controllers/slider";

const router = Router();

router.get("/products", async (req, res) => {
  res.json(123);
});

router.get("/slider",list);
router.get("/slider/:id",read);
router.delete("/slider/:id",remove);
router.post("/slider",create);
router.put("/slider/:id",update);


module.exports = router;
