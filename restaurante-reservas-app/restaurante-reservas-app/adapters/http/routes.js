import express from "express";
const router = express.Router();
router.post("/reservas", (req, res) => reservaController.crear(req, res));
export default router;
