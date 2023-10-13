"use client"
import React, {useState} from "react";
import Link from "next/link";
import Image from "next/image";
import { POST } from "../api/send/route";
import GithubIcon from "../../../public/github-icon.svg"
import LinkedinIcon from "../../../public/linkedin-icon.svg"

const EmailSection = () => {
    const [emailSubmitted, setEmailSubmittion] = useState(false);
    const handleSubmittion = async(e) => {
        e.preventDefault();
        const data = {

            // grabbing the event data from the respective variables
            email: e.target.email.value,
            subject: e.target.subject.value,
            message: e.target.message.value,
        }
        // turn data into a string
        const JSONdata = JSON.stringify(data);
        const endpoint = "/api/send";

        //Form the request for sending data to the server
        const options = {
            method: "POST",
            header: {
                "Content-Type":"application/json"
            },
            body: JSONdata,
        }

        const response = await fetch(endpoint, options);
        const resData = await response.json();

        try {
            const response = await fetch(endpoint, options);
            if (response.ok) {
            const resData = await response.json();
            if (resData.status === 200) {
                console.log('Message sent successfully!');
                setEmailSubmission(true);
            } else {
                console.error('Server returned an error:', resData);
            }
            } else {
            console.error('Failed to send the message. Server responded with status:', response.status);
            }
        } catch (error) {
            console.error('An error occurred while sending the message:', error);
        }
    }

return (
    <section
    id="contact"
    className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
    <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
        <div className="z-10">
            <h5 className="text-xl font-bold text-white my-2">
            Let&apos;s Connect
            </h5>
            <p className="text-[#ADB7BE] mb-4 max-w-md">
            {" "}
            I&apos;m actively exploring new opportunities, and my inbox is ready to receive your messages.
            Whether you have inquiries or simply want to say hello,
            I&apos;ll make every effort to respond promptly
            </p>
            <div className='flex flex-row'>
            <Link href="https://github.com/AJ07009" className="px-6 py-3 w-full sm:w-fit rounded-full mr-4">
                <Image className= "block" src = {GithubIcon} alt="Github Icon"/>
            </Link>
            <Link href="https://www.linkedin.com/in/aidan-josias-680485191/" className="px-6 py-3 w-full sm:w-fit rounded-full mr-4">
                <Image className= "block" src = {LinkedinIcon} alt="LinkedIn Icon"/>
            </Link>
            </div>
            <div className="socials flex flex-row gap-2">
        </div>
    </div>
    <div className="z-10">
        <form className="flex flex-col" onSubmit={handleSubmittion}>
        <div className="mb-6">
            <label
            htmlFor="email"
            className="text-white block mb-2 text-sm font-medium"
            >
            Your email
            </label>
            <input
            name="email"
            type="email"
            id="email"
            required
            className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
            placeholder="jacob@google.com"
            />
        </div>
        <div className="mb-6">
            <label
            htmlFor="subject"
            className="text-white block text-sm mb-2 font-medium"
            >
            Subject
            </label>
            <input
            name="subject"
            type="text"
            id="subject"
            required
            className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
            placeholder="Just saying hi"
            />
        </div>
        <div className="mb-6">
            <label
            htmlFor="message"
            className="text-white block text-sm mb-2 font-medium"
            >
            Message
            </label>
            <textarea
            name="message"
            id="message"
            className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
            placeholder="Let's talk about..."
            />
        </div>
        <button
            type="submit"
            className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full hover:text-transparent bg-clip-text bg-gradient-to-r from-purple-600  to-yellow-600"
        >
            Send Message
        </button>
        {
            emailSubmitted && (
                <p className="text-green-500 text-sm mt-2">
                    Email has been recieved!
                </p>
            )
        }
        </form>
    </div>
    </section>
);
};

export default EmailSection;
