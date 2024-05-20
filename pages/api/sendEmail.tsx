import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, email, subject, message } = req.body;

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: 587,
      secure: false,   
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD, 
      },
    });

    const mailOptions = {
      from: name,
      to: "devgumbs@gmail.com", 
      subject,
      text: `Name: ${name} \n Email: ${email} \n Message: ${message}`
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      console.log(error)
      res.status(500).json({ message: 'Error sending email', error });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
