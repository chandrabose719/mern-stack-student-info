const mongoose = require("mongoose");

// model
const { Student } = require("../models/Student");

async function getAll(query, projection, cb){
	let data = await Student.find(query, projection);
	if(!data) return cb("Student does not exist!");
	return cb(null, data);
};

async function getOne(query, projection, cb){
	const data = await Student.findOne(query, projection)
	.catch(function(err){
		if(err instanceof mongoose.CastError){
			return cb("Given ID is invalid!");
		}else{
		  return cb(err);
		}		
	});
	if(data) return cb(null, data);
};

async function postNew(query, cb){
	const dataObj = new Student(query);
	const savedData = await dataObj.save();
	return cb(null, savedData);
};

async function postEdit(query, sid, projection, cb){
	const data = await Student.findByIdAndUpdate(sid, query, projection)
	.catch(function(err){
		if(err instanceof mongoose.CastError){
			return cb("Given ID is invalid!");
		}
		return cb(err);
	});
	if(data) return cb(null, data);
};

async function deleteOne(query, cb){
	const data = await Student.deleteOne(query)
	.catch(function(err){
		if(err instanceof mongoose.CastError){
			return cb("Given ID is invalid!");
		}
		return cb(err);
	});
	if(data) return cb(null, { message: "ID "+query._id+" details are deleted!" });
};

async function deleteAll(cb){
	let deleted = await Student.deleteMany();
	return cb(null, { message: "All details are deleted!" });
};

module.exports = {
	getAll,
	getOne,
	postNew,
	postEdit,
	deleteOne,
	deleteAll,
}
