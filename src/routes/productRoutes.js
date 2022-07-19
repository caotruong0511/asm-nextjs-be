import { Router } from "express";

const router = Router();

router.get("/products", async (req, res) => {
  res.json(123);
});

module.exports = router;
