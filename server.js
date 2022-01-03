if(process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')
const bodyParser = require('body-parser')


const indexRouter = require('./routes/index')
const historyRouter = require('./routes/history')
const workLogRouter = require('./routes/workLog')
const settingsRouter = require('./routes/settings')

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
app.set('layout', 'layouts/layout')
app.use(expressLayouts)
app.use(bodyParser.urlencoded({limit: '10mb', extended: false}))


// connect to db 
const mongoose = require('mongoose')
mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true
})
const db = mongoose.connection
db.on('error', e => console.error(e))
db.once('open', e => console.log('Connected to mongoose'))

app.use('/', indexRouter)
app.use('/history', historyRouter)
app.use('/worklog', workLogRouter)
app.use('/settings', settingsRouter)

app.listen(process.env.PORT || 3001)

