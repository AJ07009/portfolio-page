// import { EmailTemplate } from '../../../components/EmailTemplate';
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req, res) {
    const { email, subject, message } = await req.json();
    console.log(email, subject, message);
    try {
    const data = await resend.emails.send({
        from: fromEmail,
        to: [fromEmail, email],
        subject: subject,
        react: (
            <div style={styles.container}>
            <p style={styles.content}>Thank you for contacting me, I will get in touch with you soon</p>
            <p>New message submitted:</p>
            <p style={styles.c0ntent}>{message}</p>
            </div>
        ),
    });
    return NextResponse.json(data);
    } catch (error) {
    return NextResponse.json({ error });
    }
}

const styles = {
    container: {
        background: 'black',
        color: 'white',
        textAlign: 'center',
        padding: '20px',
    },
    banner: {
        width: '100%',
    },
    content: {
        fontSize: 26,
        fontWeight: 'bold',
    },
    c0ntent: {
        fontSize: 18,
    }
};