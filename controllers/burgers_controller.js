var express = require("express");
var router = express.Router();
var burger = require("../models/burgers.js");
router.get("/", function(req, res){
	burger.all(function(data){
		var hbsObject = {
			burgers: data
		};
		console.log(hbsObject);
		res.render("index", hbsObject);
	});
});
router.post("/", function(req, res) {
	 burger.create([
    "name", "devoured"
  ], [
    req.body.burger_name, req.body.devoured
  ], function() {
    res.redirect("/");
  });
});
router.put("/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  burger.update({
    condition: req.body.condition
  }, condition, function() {
    res.redirect("/");
  });
});
router.delete("/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  cat.delete(condition, function() {
    res.redirect("/");
  });
});
module.exports = router;