// src/app/api/contact/route.ts
import { NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import Contact from '@/models/Contact';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body;

    await connectDB();

    // 1. Save to MongoDB
    const newContact = await Contact.create({
      name,
      email,
      phone,
      message,
    });

    // 2. Setup Nodemailer Transporter (Replaces Django Email Backend)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // 3. Send Notification to YOU (Admin)
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.RECIPIENT_EMAIL,
      subject: `New Legal Inquiry from ${name}`,
      text: `
        New website inquiry received:
        
        Name: ${name}
        Email: ${email}
        Phone: ${phone || 'N/A'}
        
        Message:
        ${message}
      `,
    });

    // 4. Send Confirmation to CLIENT
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Inquiry Received - Morse & Associates',
      text: `
        Dear ${name},

        Thank you for contacting Morse & Associates.

        We have received your inquiry and our team will review your message shortly. 
        If your matter requires urgent attention, please call our office directly.

        Best Regards,

        Morse & Associates
        Attorneys at Law
      `,
    });

    return NextResponse.json({ message: 'Submission successful', success: true }, { status: 201 });

  } catch (error) {
    console.error('Contact error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}