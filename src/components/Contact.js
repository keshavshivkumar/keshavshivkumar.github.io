import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import Navbar from './Navbar';
import { FaLinkedin } from 'react-icons/fa';
import '../styles/contact.css'; // Import the CSS file

const Contact = () => {
    const form = useRef();
    const [message, setMessage] = useState('');
    const [messageVisible, setMessageVisible] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, process.env.REACT_APP_PUBLIC_KEY)
            .then(() => {
                setMessage("Message sent successfully!")
                setMessageVisible(true);
                setTimeout(() =>{setMessageVisible(false)}, 5000);
            })
            .catch((error) => {
                setMessage(error);
                setMessageVisible(true);
                setTimeout(() => setMessageVisible(false), 5000);
            });
        e.target.reset();
    };

    return (
        <div>
            <Navbar />
            <div className="contact-container">
                <h1>Contact Me</h1>
                <form ref={form} onSubmit={sendEmail} className="contact-form">
                    <label>Name</label>
                    <input type="text" name="from_name" required placeholder='Name' />

                    <label>Email</label>
                    <input type="email" name="email" required placeholder='Email' />

                    <label>Subject</label>
                    <input type="text" name="subject" required placeholder='Subject' />

                    <label>Message</label>
                    <textarea name="message" required placeholder='Message' rows={10}></textarea>

                    <button type="submit" className="submit-btn">Send</button>
                </form>
                {messageVisible && <div className='message'>{message}</div>}
                <div className="social-media">
                    <span>Let's Connect!</span>
                    <a href="https://www.linkedin.com/in/keshavshivkumar" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin size={30} />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Contact;
