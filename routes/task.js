const express = require('express')
const task = require('../models/task')
const router = express.Router()

const Task = require('../models/task')
const Company = require('../models/company')

// view task route 
router.get('/:id', async (req, res) => {
    try {
        const task = await Task.findById(req.params.id).populate('company').exec() 
        res.render('task/index', {task: task})
    } catch (e) {
        res.send('ERROR: ' + e)
    }
})

// edit view task route 
router.get('/:id/edit', async (req, res) => {
    try {
        const companys = await Company.find({}).sort({'CompanyName': 1}).exec()
        const task = await Task.findById(req.params.id).populate('company').exec() 
        res.render('task/edit', {task: task, companys: companys})
    } catch (e) {
        res.send('ERROR: ' + e)
    }
})

// Update Task route
router.put('/:id/edit', async (req, res) => {
    // res.send('Dodać edycję :) ')

    try {
        let task = await Task.findById(req.params.id)
        task.stopedAt = new Date(req.body.stopedAtDate + ' ' +req.body.stopedAtTime)
        task.startedAt = new Date(req.body.startedAtDate + ' ' +req.body.startedAtTime)
        task.description = req.body.description
        task.company = req.body.companyName
        await task.save()
        res.redirect(`/task/${req.params.id}/edit`)
    } catch (error) {
        console.log(error);
        res.send(error)
    }

    // let author
    // try {
    //     author = await Author.findById(req.params.id)
    //     author.name = req.body.name
    //     await author.save()
    //     res.redirect(`/authors/${author.id}`)
    // } catch (e){
    //     // console.log(e);
    //     if (author == null){
    //         res.redirect('/')
    //     } else {
    //         res.render('authors/edit', {
    //             author: author,
    //             errorMessage: 'Error updating Author'
    //         })
    //     }
    // }
})

//delete task route 
router.delete(`/:id`, async (req, res) => {
    let task 
    try {
        task = await Task.findById(req.params.id)
        await task.remove()
        res.redirect('/')
    } catch (error) {
        console.log(error);
        if (task == null) {
            res.redirect('/')   
        } else {
            res.redirect(`/task/${task.id}`)
        }
    }
})

// router.post('/', async (req,res) => {
//     const company = new Company({
//         companyName: req.body.name
//     })
//     try {
//         const newCompany = await company.save()
//         res.redirect('/settings')
//     } catch (e){
//         console.log(e);
//     }
// })

module.exports = router