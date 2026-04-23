import React from 'react';

const ContactPage: React.FC = () => {
    const email = 'rajeshbaramol@gmail.com';
    const phone = '+91 9632192611';
    const portfolioUrl = 'https://rajesh-bn-portfolio.netlify.app';
    const linkedinUrl = 'https://www.linkedin.com/in/rajesh-bn-7a8854122/';

    return (
        <div className='contact-page' id="contact">
            <div className='contact-container'>
                <h1>GET IN TOUCH.</h1>
                <p>Open to leadership opportunities, consulting, and product engineering collaborations.</p>
                <div className='contact-actions'>
                    <a href={`mailto:${email}`} className='action-btn'>Email Me</a>
                    <a href={linkedinUrl} target='_blank' rel='noreferrer' className='action-btn secondary'>Connect on LinkedIn</a>
                    <a href='/Rajesh_BN_Resume.pdf' download='Rajesh_BN_Resume.pdf' className='action-btn secondary'>Download Resume</a>
                </div>
                <div className='form-container'>
                    <div className='contact-info'>
                        <h2>Contact Information</h2>
                        <p><span>Location:</span> Bengaluru, India</p>
                        <p><span>Email:</span> <a href={`mailto:${email}`}>{email}</a></p>
                        <p><span>Phone:</span> <a href='tel:+919632192611'>{phone}</a></p>
                        <p><span>Portfolio:</span> <a href={portfolioUrl} target='_blank' rel='noreferrer'>rajesh-bn-portfolio.netlify.app</a></p>
                        <p><span>LinkedIn:</span> <a href={linkedinUrl} target='_blank' rel='noreferrer'>linkedin.com/in/rajesh-bn-7a8854122</a></p>
                    </div>
                    <form
                        className='contact-form'
                        action={`mailto:${email}`}
                        method='post'
                        encType='text/plain'
                    >
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
