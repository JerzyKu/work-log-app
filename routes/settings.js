const express = require('express')
const router = express.Router()

const Company = require('../models/company')

router.get('/', async (req, res) => {
    let companys
    try {
        companys = await Company.find({}).exec()
    } catch {
        companys = []
    }
    res.render('settings/index', {companys: companys})
})

router.post('/', async (req,res) => {
    const company = new Company({
        companyName: req.body.name
    })
    try {
        const newCompany = await company.save()
        res.redirect('/settings')
    } catch (e){
        console.log(e);
    }
})

module.exports = router