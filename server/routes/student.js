const express = require("express");
const router = express.Router();

const { studentValidation } = require("../models/Student");
const students = require("../library/students");

router.get("/all", function(req, res, next){
    let query = {};
	let projection = { __v: 0 };
	students.getAll(query, projection, function(err, data){
		if(err) next(err);
		if(data) res.send({status:"success", data: data});
	});
});

router.get("/:id", function(req, res, next){
	let query = { "_id": req.params.id };
	let projection = { __v: 0 };
	students.getOne(query, projection, function(err, data){
		if(err) next(err);
		if(data) res.send({status:"success", data: data});
	});
});

router.post("/new", async function(req, res, next){
    // validation
	let query = await studentValidation.validateAsync(req.body)
	.catch(function(err){
		res.send({status:"error", msg: err.details});
	});
	// save
	if(query){
		students.postNew(query, function(err, data){
			if(err) {
				res.send({status:"error", msg: err});
			}else{
				res.send({status:"success", data: data});
			}	
		});
	}	
});

router.post("/edit/:id", async function(req, res, next){
	// validation
	let query = await studentValidation.validateAsync(req.body)
	.catch(function(err){
		res.send({status:"error", msg: err.details});
	});
	// save
	let sid = req.params.id;
	let projection = { new: true };
	if(query){
		students.postEdit(query, sid, projection, function(err, data){
			if(err) {
				res.send({status:"error", msg: err});
			}else{
				res.send({status:"success", data: data});
			}	
		});
	}
});

router.delete("/delete/:id?", async function(req, res, next){
	if(req.params.id){
		let query = { "_id": req.params.id };
		students.deleteOne(query, function(err, data){
			if(err) next(err);
			if(data) res.send(data);
		});
	}else{
		students.deleteAll(function(err, data){
			if(err) next(err);
			if(data) res.send(data);
		});
	}
});

module.exports = router;