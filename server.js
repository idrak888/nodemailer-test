const express = require('express');
const nodemailer = require('nodemailer');

var app = express();

var port = process.env.PORT || 3000;

app.post('/signup', (req, res) => {
	nodemailer.createTestAccount((err, account) => {
	    // create reusable transporter object using the default SMTP transport
	    let transporter = nodemailer.createTransport({
	        service: 'Gmail',
	        auth: {
	            user: 'playbox8g@gmail.com', // generated ethereal user
	            pass: '8nov2016' // generated ethereal password
	        },
	        tls: {
	        	rejectUnauthorized: false
	        }
	    });

	    // setup email data with unicode symbols
	    let mailOptions = {
	        from: '"Idrak Mustahsin" <playbox8g@gmail.com>', // sender address
	        to: 'fullstackenthusiast@gmail.com', // list of receivers
	        subject: 'Thank you for using my Todo App', // Subject line
	        text: 'Hello world', // plain text body
	        html: 'It works'// html body
	    };

	    // send mail with defined transport object
	    transporter.sendMail(mailOptions, (error, info) => {
	        if (error) {
	            return console.log(error);
	        }
	        console.log('Message sent: %s', info.messageId);
	        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
	    });
	});
});

app.listen(port);