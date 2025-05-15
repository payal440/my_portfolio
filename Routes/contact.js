const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');
const nodemailer = require('nodemailer');

// Email setup
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

// POST: /api/contact
router.post('/', async (req, res) => {
    const { firstName, lastName, email, phone, message } = req.body;

    try {
        // Create new contact with validation
        const newContact = new Contact({
            firstName,
            lastName,
            email,
            phone,
            message
        });

        // Validate the document
        const validationError = newContact.validateSync();
        if (validationError) {
            const errors = {};
            for (let field in validationError.errors) {
                errors[field] = validationError.errors[field].message;
            }
            return res.status(400).json({ 
                success: false,
                message: "Validation failed",
                errors 
            });
        }

        // Save to database
        await newContact.save();

        // Send Email Notification
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER,
            subject: 'New Contact Form Submission',
            text: `
Name: ${firstName} ${lastName}
Email: ${email}
Phone: ${phone}
Message: ${message}
            `,
            html: `
<h2>New Contact Form Submission</h2>
<p><strong>Name:</strong> ${firstName} ${lastName}</p>
<p><strong>Email:</strong> ${email}</p>
<p><strong>Phone:</strong> ${phone}</p>
<p><strong>Message:</strong> ${message}</p>
            `
        };

        await transporter.sendMail(mailOptions);
        res.status(201).json({ 
            success: true,
            message: "Message sent successfully!" 
        });

    } catch (err) {
        console.error('Error:', err);
        
        // Handle mongoose validation errors
        if (err.name === 'ValidationError') {
            const errors = {};
            for (let field in err.errors) {
                errors[field] = err.errors[field].message;
            }
            return res.status(400).json({ 
                success: false,
                message: "Validation failed",
                errors 
            });
        }

        res.status(500).json({ 
            success: false,
            message: "Server error. Please try again later." 
        });
    }
});

module.exports = router;
