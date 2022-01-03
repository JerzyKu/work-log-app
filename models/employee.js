const mongoose = require('mongoose')

const employeeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    surname: {
        type: String,
        required: true
    },
    email: {
        type: String
    },
    login: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        require: true,
        default: Date.now
    },
    locked: {
        type: Boolean,
        require: true,
        default: false
    },
    disabled: {
        type: Boolean,
        require: true,
        default: false
    },
    wrongPassInputCounter: {
        type: Number,
        required: true,
        default: 0
    }

})


module.exports = mongoose.model('Employee', employeeSchema)