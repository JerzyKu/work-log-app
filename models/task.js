const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
    taskName: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        require: true,
        default: Date.now
    },
    startedAt: {
        type: Date,
        require: true,
        default: Date.now
    },
    stopedAt: {
        type: Date
    },
    pauses: {
        type: Array
    },
    description: {
        type: String
    },
    worker: {

    },
    company : {

    }
})

bookSchema.virtual('taskTime').get(function(){
    if (this.stopedAt != null){
        return this.stopedAt - this.startedAt
    } else {
        return 0
    }
})

module.exports = mongoose.model('Task', taskSchema)