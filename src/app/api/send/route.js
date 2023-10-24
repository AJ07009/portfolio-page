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
        <>
        <Html>
        <Head />
        <Preview>{subject}</Preview>
        <Body style={main}>
        <Container>
            <Section style={logo}>
            <Img src={`${baseUrl}/static/yelp-logo.png`} />
            </Section>

            <Section style={content}>
            <Img width={620} src={`${baseUrl}/static/yelp-header.png`} />

            <Row style={{ ...boxInfos, paddingBottom: '0' }}>
                <Column>
                <Heading
                    style={{
                    fontSize: 32,
                    fontWeight: 'bold',
                    textAlign: 'center',
                    }}
                >
                    Hi {userFirstName},
                </Heading>
                <Heading
                    as="h2"
                    style={{
                    fontSize: 26,
                    fontWeight: 'bold',
                    textAlign: 'center',
                    }}
                >
                    We noticed a recent login to your Yelp account.
                </Heading>

                <Text style={paragraph}>
                    <b>Time: </b>
                    {formattedDate}
                </Text>
                <Text style={{ ...paragraph, marginTop: -5 }}>
                    <b>Device: </b>
                    {loginDevice}
                </Text>
                <Text style={{ ...paragraph, marginTop: -5 }}>
                    <b>Location: </b>
                    {loginLocation}
                </Text>
                <Text
                    style={{
                    color: 'rgb(0,0,0, 0.5)',
                    fontSize: 14,
                    marginTop: -5,
                    }}
                >
                  *Approximate geographic location based on IP address:
                    {loginIp}
                </Text>

                <Text style={paragraph}>
                    If this was you, there's nothing else you need to do.
                </Text>
                <Text style={{ ...paragraph, marginTop: -5 }}>
                    If this wasn't you or if you have additional questions, please
                    see our support page.
                </Text>
                </Column>
            </Row>
            <Row style={{ ...boxInfos, paddingTop: '0' }}>
                <Column style={containerButton} colSpan={2}>
                <Button style={button}>Learn More</Button>
                </Column>
            </Row>
            </Section>

            <Section style={containerImageFooter}>
            <Img width={620} src={`${baseUrl}/static/yelp-footer.png`} />
            </Section>

            <Text
            style={{
                textAlign: 'center',
                fontSize: 12,
                color: 'rgb(0,0,0, 0.7)',
            }}
            >
            © 2022 | Yelp Inc., 350 Mission Street, San Francisco, CA 94105,
            U.S.A. | www.yelp.com
            </Text>
        </Container>
        </Body>
    </Html>
        </>
        ),
    });
    return NextResponse.json(data);
    } catch (error) {
    return NextResponse.json({ error });
    }
}
