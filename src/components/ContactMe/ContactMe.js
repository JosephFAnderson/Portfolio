import React, { useState } from 'react'
import emailjs from 'emailjs-com';
import './ContactMe.css';

const ContactMe = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [emailSent, setEmailSent] = useState(false);

  const isValidEmail = email => {
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(String(email).toLowerCase());
  };

  const submit = () => {
    if(!isValidEmail(email)){
      alert('Please provide a valid email');
      return;
    }

    if (name && email && message) {
       // TODO - send mail
       const serviceId = process.env.REACT_APP_SERVICE_ID;
       const templateId = process.env.REACT_APP_TEMPLATE_ID;
       const userId = process.env.REACT_APP_USER_ID;
       const templateParams = {
        name,
        email,
        message
       };

       emailjs.send(serviceId, templateId, templateParams, userId)
        .then(res => console.log(res))
        .then(err => console.log(err))

        setName('');
        setEmail('');
        setMessage('');
        setEmailSent(true);
    } else {
        alert('Please fill in all fields.');
    }
}

  return (
    <div id="contact-form">
        <p style={{fontSize: "1.5em"}}>Send me an email</p>
        <input type="text" placeholder="Your Name" value={name} onChange={e => setName(e.target.value)} />
        <input type="email" placeholder="Your email address" value={email} onChange={e => setEmail(e.target.value)} />
        <textarea placeholder="Your message" value={message} onChange={e => setMessage(e.target.value)}></textarea>
        <button className="formBtn" onClick={submit}>Send Message</button>
        <span className={emailSent ? 'visible' : null}>Thank you for your message, I will be in touch as soon as possible!</span>
    </div>
    );
};

export default ContactMe;