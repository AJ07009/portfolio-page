import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = process.env.RESEND_API_KEY;
const fromEmail = process.env.FROM_EMAIL;

export async function POST (req, res) {
    const { body } = req.json;
    const { email,subject, message } = body;


    // const message = FormData.get('message');
    // const senderEmail = FormData.get('email');
    // const subjectMatter = FormData.get('subject');

    try {
    const data = await resend.emails.send({
        from: fromEmail,
        to: [fromEmail, email],
        subject: subject,
        
        react: (
            <>
            <h1>{subject}</h1>
            <p>Thank you for reaching out!</p>
            <p>We will get back to you as soon as possible!</p>
            <p>Here is a record of what you asked, {message}</p>
            </>
        )
    });

    return NextResponse.json(data);
    } catch (error) {
    return NextResponse.json({ error });
    }
}
