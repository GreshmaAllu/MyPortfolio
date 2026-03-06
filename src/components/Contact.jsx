import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Globe } from 'lucide-react';
import '../styles/Contact.css';

const Contact = () => {
    return (
        <section id="contact" className="section contact-section">
            <div className="container contact-container">
                <motion.div
                    className="contact-grid"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="contact-info">
                        <h2 className="section-title" style={{ textAlign: 'left' }}>Let's Connect</h2>
                        <p>Have a project or collaboration in mind? I'm always open to discussing new ideas and opportunities.</p>

                        <div className="social-links">
                            <a href="https://www.linkedin.com/in/greshma-allu-0129b32bb" target="_blank" rel="noopener noreferrer" className="social-icon">
                                <Linkedin size={24} />
                            </a>
                            <a href="https://github.com/GreshmaAllu" target="_blank" rel="noopener noreferrer" className="social-icon">
                                <Github size={24} />
                            </a>
                            <a href="https://www.behance.net/greshmaallu" target="_blank" rel="noopener noreferrer" className="social-icon">
                                <Globe size={24} />
                            </a>
                        </div>
                    </div>

                    <form
                        action="https://api.web3forms.com/submit"
                        method="POST"
                        className="contact-form"
                    >
                        <input type="hidden" name="access_key" value="46b3e83b-399a-4712-8e7c-86e580e0c8b6" />
                        <div className="form-group">
                            <label htmlFor="name">Full Name</label>
                            <input type="text" id="name" name="name" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email Address</label>
                            <input type="email" id="email" name="email" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Reason for Contact</label>
                            <textarea id="message" name="message" required rows="5"></textarea>
                        </div>
                        <button type="submit" className="btn primary-btn submit-btn">Send Message</button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
