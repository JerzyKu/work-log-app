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
        console.log('tutaj');
    }
    if (req.query.endedAfter != null && req.query.endedAfter != ''){
        query = query.gte('stopedAt', req.query.endedAfter) // greater then equal
    }

    try {
        tasks = await query.populate('company').exec()
        companys = await Company.find({}).exec()
    } catch (e){
        console.log(e);
        tasks = []
        companys = []
    }
    console.log(req.query);
    res.render('history/index', {tasks: tasks, companys: companys, searchOptions: req.query})
})

module.exports = router