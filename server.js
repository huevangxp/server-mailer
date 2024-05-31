const express = require('express');
const nodemailer = require('nodemailer');
const cron = require('node-cron');
require('dotenv').config();  // Load environment variables from .env file

// Initialize Express app
const app = express();
const port = process.env.PORT =  3000;

// Email configuration
const transporter = nodemailer.createTransport({

    host: "sandbox.smtp.mailddtrap.io",
    port: 2525,
    secure: false,
    auth: {
        user: 'eb949f8654bc8dd2',
        pass: 'ddfasdfqwedfd2232'
    }
});

// Function to send email
// Configure the mailoptions object
const mailOptions = {
    from: 'huevang@email.com',
    to: 'huevang@email.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
};

// Send the email
transporter.sendMail(mailOptions, function(error, info){
    if (error) {
        console.log('Error:', error);
    } else {
        console.log('Email sent:', info.response);
    }
});

// Schedule the report to be sent daily at a specific time (e.g., 8:00 AM)
// cron.schedule('0 8 * * *', dailyReport, {
//     scheduled: true,
//     timezone: 'America/New_York'  // Adjust timezone as needed
// });

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
