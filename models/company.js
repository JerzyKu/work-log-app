const mongoose = require('mongoose')

const companySchema = new mongoose.Schema({
    companyName: {
        type: String,
        required: true
    },
    subtask: {
        type: {}
    },
    createdAt: {
        type: Date,
        require: true,
        default: Date.now
    }
})


module.exports = mongoose.model('Company', companySchema)