const express = require("express");
const res = require("express/lib/response");
const router = express.Router();

router.get("/all", function(req, res, next){
    console.log("get all next...");
    res.send("get all next...");
});

router.get("/:id", function(req, res, next){
    console.log("passed next id: ", req.params.id);
    res.send("passed next id: "+req.params.id);
});

router.post("/new", function(req, res, next){
    console.log("New next: ", req.body);
    res.send(req.body);
});

module.exports = router;