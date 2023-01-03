const joi = require("joi");
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const StudentSchema = new Schema({
    s_name:{
        type: String,
        required: true,
    },
    s_age: {
        type: Number,
        required: true,
    },
    status: {
        type: Boolean,
        default: true,
    },
    created: {
        type: Date,
        default: Date.now,
    }
});

const Student = mongoose.model("student", StudentSchema);

// validation
const studentValidation = joi.object({
    s_name: joi.string().required(),
    s_age: joi.number().required(),
});

module.exports = {
    Student,
    studentValidation,
}
