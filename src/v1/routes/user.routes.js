const express = require("express");
const router = express.Router();

router.get('/test', (req, res) => {
  res.send({'code': 200, 'message': 'OK r day!'})
});

module.exports = router;