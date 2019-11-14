import { oauth, oauthCallback } from "../controllers/oauth";

const router = require("express").Router();

router.post("/", oauth);
router.post("/", oauthCallback);

export default router;
