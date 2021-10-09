const nodemailer = require('nodemailer')

// allows .env file use through process.env
require('dotenv').config()

// create reusable transporter object using the default SMTP transport
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASS,
  },
})

module.exports = async (req, res) => {
  const mailData = {
    from: process.env.EMAIL, // sender address
    to: process.env.EMAIL, // list of receivers
    subject: 'New contact',
    text:
      'name: ' +
      req.body.name +
      '\nemail: ' +
      req.body.email +
      '\n\nmessage: ' +
      req.body.message,
  }

  const messageSent = await transporter.sendMail(mailData)

  if (messageSent.accepted[0] !== null) {
    return res.status(200).json({ message: 'success' })
  } else {
    return res.status(200).json({ message: 'error' })
  }
}
