const express = require('express')
const router = express.Router()

const Company = require('../models/company')
const Task = require('../models/task')


router.get('/', async (req, res) => {
    let companys
    let tasks
    try {
        companys = await Company.find({}).exec()
        tasks = await Task.find({}).exec()
    } catch {
        companys = []
        tasks = []
    }
    res.render('workLog/index', {companys: companys, tasks: tasks})
})

router.post('/start', async (req, res) => {
    const task = new Task({
        taskName: req.body.nameee,
        description: req.body.description
    })
    try {
        const newTask = await task.save()
        res.redirect('/worklog')
    } catch (e){
        console.log(e);
        res.send(e)
    }
})

router.get('/start', (req,res) => {
    res.redirect('/worklog')
})

module.exports = router