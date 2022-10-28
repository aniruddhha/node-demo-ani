const express = require('express')

const port = process.env.PORT || 3000

const app = express()

app.get('/', (req, res) => {
    res.json({ sts : 'success', msg :'you are on cloud' })
})

app.listen(port, () => {
    console.log(`✅ Server Running Successfully ${port}`)
})