const mongoose = require('mongoose')

const companySchema = new mongoose.Schema({
    companyName: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        require: true,
        default: Date.now
    }
})


module.exports = mongoose.model('Company', companySchema)