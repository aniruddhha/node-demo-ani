const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.json({ sts : 'success', msg :'you are on cloud' })
})

app.listen(7867, () => {
    console.log('✅ Server Running Successfully')
})