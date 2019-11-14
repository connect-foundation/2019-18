import { oauth, oauthCallback } from "../controllers/oauth";

const router = require("express").Router();

router.get("/", oauth);
router.get("/callback", oauthCallback);

export default router;
