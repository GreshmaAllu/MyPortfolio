import React from 'react';
import { motion } from 'framer-motion';
import { FileText } from 'lucide-react';
import myPic from '../assets/images/my photo.jpg';
import '../styles/Hero.css';

const Hero = ({ onOpenResume }) => {
    return (
        <section id="hero" className="hero-section">
            <div className="container hero-container">
                <motion.div
                    className="hero-content"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                    >
                        I'm <span className="highlight">Allu Greshma</span>
                    </motion.h1>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                    >
                        UI/UX Designer & AI-driven Frontend Developer
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                    >
                        I design and develop modern digital experiences that blend creativity and intelligence.
                    </motion.p>
                    <motion.div
                        className="hero-btns"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                    >
                        <a href="#myworks" className="btn primary-btn">Explore My Work</a>
                        <button
                            onClick={onOpenResume}
                            className="btn secondary-btn resume-hero-btn"
                        >
                            <FileText size={20} />
                            View Resume
                        </button>
                    </motion.div>
                </motion.div>

                <motion.div
                    className="hero-image-wrapper"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="hero-image-bg"></div>
                    <img src={myPic} alt="Allu Greshma" className="hero-img" />
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
