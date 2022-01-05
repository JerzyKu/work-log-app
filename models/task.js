const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
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
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Company'
    },
    status: {
        type: String,
        require: true,
        default: 'Started'
    }
})

// taskSchema.virtual('taskTime').get(function(){
//     if (this.stopedAt != null){
//         return this.stopedAt - this.startedAt
//     } else {
//         return 0
//     }
// })

taskSchema.virtual('createdAtToHhMm').get(function(){
    const m = this.createdAt.getMinutes()
    const h = this.createdAt.getHours()
    return `${h < 10 ? '0' : ''}${h}:${m < 10 ? '0' : ''}${m}`
})

// taskSchema.virtual('descriptionShort').get(function(){

//     return `${this.description.toString().slice(0, 45)}`
// })

module.exports = mongoose.model('Task', taskSchema)