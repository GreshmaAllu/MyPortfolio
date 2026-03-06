import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Github, ExternalLink, Globe } from 'lucide-react';
import myPhoto from '../assets/images/my photo.jpg';
import '../styles/About.css';

const About = () => {
    return (
        <section id="about" className="section about-section">
            <div className="container about-container">
                <motion.div
                    className="about-image-wrapper"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <img src={myPhoto} alt="Allu Greshma" className="about-img" />
                    <div className="about-decoration"></div>
                </motion.div>

                <motion.div
                    className="about-content"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="section-title" style={{ textAlign: 'left' }}>About Me</h2>

                    <div className="about-text">
                        <p>
                            Hi! I’m <strong>Allu Greshma</strong>, a passionate <strong>UI/UX Designer</strong> and <strong>AI-powered Web/App Developer</strong> from India.
                            I’m currently pursuing my B.Tech in Computer Science at Centurion University.
                        </p>
                        <p>
                            My design journey began with curiosity for how interfaces shape user emotions and evolved into crafting purposeful digital products that truly connect with people.
                            I am passionate about building <strong>scalable, intuitive, and business-focused digital products</strong>.
                        </p>
                        <p>
                            I specialize in <strong>Design Thinking</strong>, <strong>User Research</strong>, <strong>Visual Design</strong>, and <strong>Prototyping</strong> to transform ideas into seamless interactive experiences.
                        </p>
                    </div>

                    <div className="about-connect">
                        <h3>Connect with me:</h3>
                        <div className="social-links-about">
                            <a href="https://www.linkedin.com/in/greshma-allu-0129b32bb" target="_blank" rel="noopener noreferrer" className="social-btn linkedin">
                                <Linkedin size={20} />
                                LinkedIn
                            </a>
                            <a href="https://github.com/GreshmaAllu" target="_blank" rel="noopener noreferrer" className="social-btn github">
                                <Github size={20} />
                                GitHub
                            </a>
                            <a href="https://www.behance.net/greshmaallu" target="_blank" rel="noopener noreferrer" className="social-btn behance">
                                <Globe size={20} />
                                Behance
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
