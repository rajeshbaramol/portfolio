import React from 'react';

const ContactPage: React.FC = () => {
    return (
        <div className='contact-page' id="contact">
            <div className='contact-container'>
                <h1>GET IN TOUCH.</h1>
                <p>
                Please feel free to reach out to me. Here are my contact details.
                </p>
                <div className='form-container'>
                    <div className='contact-info'>
                        <h2>Contact Information</h2>
                        <p>Address: WJ9P+343, 13th Cross Rd, Teacher's Colony, Jakkasandra, 1st Block Koramangala, HSR Layout 5th Sector, Bengaluru, Karnataka 560034</p>
                        <p>Email: rajeshbaramol@gmail.com</p>
                        <p>Phone: +91 9632192611</p>
                    </div>
                    <form className='contact-form'>
                        <div className='form-group'>
                            <label htmlFor='name'>Name</label>
                            <input type='text' id='name' name='name' placeholder='Your Name' required />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='email'>Email</label>
                            <input type='email' id='email' name='email' placeholder='Your Email' required />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='message'>Message</label>
                            <textarea id='message' name='message' placeholder='Your Message' rows={5} required />
                        </div>
                        <button type='submit'>Send Message</button>
                    </form>

                </div>


                {/* <div className='social-media'>
                    <h2>Social Media</h2>
                    <ul>
                        <li>
                            <a href='https://www.linkedin.com/in/rajesh-bn-7a8854122/' target='_blank' rel='noopener noreferrer'>
                                LinkedIn
                            </a>
                        </li>
                    </ul>
                </div> */}
            </div>
        </div>
    );
};

export default ContactPage;
