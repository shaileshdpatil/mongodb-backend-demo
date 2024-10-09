const mongoose = require('mongoose');

const EmployeeModalSchema = new mongoose.Schema({
    first_name: {type: String, required: [true,"{PATH} is required"]},
    last_name: {type: String, required: [true,"{PATH} is required"]},
    email:{
        type: String,
        validate: {
            validator: function(v) {
                const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
                return emailRegex.test(v);
            },
            message: `{VALUE} is not a valid {PATH}!`
        },
        unique:true,
        required: [true,"{PATH} is required"],
    },
    age: {
        type: Number, required: [true,"{PATH} is required"],
        validate: {
            validator: (v) => typeof v === 'number' && !isNaN(v),
            message: `{VALUE} is not a number!`
        },
        min: [18, '{PATH} be at less then 18, got {VALUE}'],
        max:[35,"{PATH} maximum should be less than 30, got {VALUE}"],
    },
    gender: {
        type: String,
        enum: {values:["male", "female"],message:'{VALUE} is not a valid {PATH}'},
        required: [true,"{PATH} is required"]
    },
},{
    timestamps: true,
})

const Employee = mongoose.model("Employee", EmployeeModalSchema);
module.exports = Employee;