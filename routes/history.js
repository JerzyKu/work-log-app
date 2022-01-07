const express = require('express')
const router = express.Router()

const Task = require('../models/task')
const Company = require('../models/company')

router.get('/', async (req, res) => {
    let tasks
    let companys

    let query = Task.find()

    // console.log(req.query.companyName);

    if (req.query.companyName != null && req.query.companyName != ''){
        query = query.where('company', req.query.companyName)
    }
    if (req.query.endedBefore != null && req.query.endedBefore != ''){
        query = query.lte('stopedAt', req.query.endedBefore) // less then equal
    }
    if (req.query.endedAfter != null && req.query.endedAfter != ''){
        query = query.gte('stopedAt', req.query.endedAfter) // greater then equal
    }

    let t = {}
    t.endedAfter = new Date(new Date().setDate(1)).toISOString().split('T')[0]
    t.endedBefore = new Date().toISOString().split('T')[0]
    try {
        tasks = await query.populate('company').exec()
        companys = await Company.find({}).exec()
    } catch (e){
        console.log(e);
        tasks = []
        companys = []
    }
    res.render('history/index', {tasks: tasks, companys: companys, searchOptions: req.query === {} ? req.query : t})
})

module.exports = router