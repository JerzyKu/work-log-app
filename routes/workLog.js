const express = require('express')
const router = express.Router()

const Company = require('../models/company')
const Task = require('../models/task')


router.get('/', async (req, res) => {
    let companys
    let tasks
    try {
        companys = await Company.find({}).exec()
        tasks = await Task.find({status: 'Started'}).populate('company').exec()
        endedTask = await Task.find({status: { $ne: 'Started'}}).populate('company').limit(5).sort({createdAt: -1}).exec()
    } catch {
        companys = []
        tasks = []
    }
    res.render('workLog/index', {companys: companys, tasks: tasks, endedTask: endedTask})
})


router.post('/start', async (req, res) => {
    const task = new Task({
        company: req.body.nameee,
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

router.put('/:id/stop', async (req, res) => {
    try {
        const date = new Date()
        // console.log(date);
        let task = await Task.findById(req.params.id)
        task.stopedAt = date
        task.status = 'ended'
        await task.save()
        res.redirect('/worklog')
    } catch (e){
        console.log('ERROR: ', e);
        res.send(e)
    }
})

module.exports = router