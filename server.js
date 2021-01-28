const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const bootcamps = require('./routes/bootcamps')

const app = express()
dotenv.config({ path: './config/config.env' })

const port = process.env.PORT || 5000
const server = app.listen(port, () => {
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${port}`)
})

// app's middlewares
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

// Mount routers
app.use('/api/v1/bootcamps', bootcamps);

// todo:
if (require.main !== module) {
    module.exports = server
}