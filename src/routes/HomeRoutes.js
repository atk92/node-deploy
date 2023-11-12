
const { Router } = require('express');
const r = Router();
r.get("/", (req, res) => {
    return res.json({ ok: true })
});

module.exports = r;