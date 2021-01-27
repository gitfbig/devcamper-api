const express = require('express')
const dotenv = require('dotenv')

const app = express()
dotenv.config({ path: './config/config.env' })

const port = process.env.PORT || 5000
const server = app.listen(port, () => {
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${port}`)
})

// todo:
if (require.main !== module) {
    module.exports = server
}