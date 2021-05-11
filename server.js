const express = require('express')
const nodemailer = require('nodemailer')
const app = express()

const PORT = process.env.PORT || 3000;

app.use(express.static('public'))
app.use(express.json())

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
})

app.post('/', async (req, res) => {
    console.log(req.body)

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.AUTH_USER,
            pass: process.env.AUTH_PASS
        }
    })

    const mailOptions = {
        from: req.body.email,
        to: 'abdellah.bahsine01@gmail.com',
        subject: 'Message from ' + req.body.email,
        text: req.body.message
    }

    transporter.sendMail(await mailOptions, (error, info) => {
        if(error){
            console.log(error)
            return res.send('Error!')
        }

        console.log('Email sent: ' + info.response)
        res.send('success')
    })
})

app.listen(PORT, () => {
    console.log('Server is running on port ' + PORT)
})