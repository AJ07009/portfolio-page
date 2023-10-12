import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST () {
    const message = FormData.get('message');
    const senderEmail = FormData.get('email');
    const subjectMatter = FormData.get('subject');

    try {
    const data = await resend.emails.send({
        from: 'Contact <onboarding@resend.dev>',
        to: ['josiasaidan@gmail.com'],
        subject: subjectMatter,
        reply_to: senderEmail,
        text: message
        // react: EmailTemplate({ firstName: 'John' }),
    });

    return NextResponse.json(data);
    } catch (error) {
    return NextResponse.json({ error });
    }
}
