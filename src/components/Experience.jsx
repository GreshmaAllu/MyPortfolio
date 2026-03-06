import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import '../styles/Experience.css';

const Experience = () => {
    const experiences = [
        {
            role: 'Graphic Designer',
            company: 'Oasis Infobyte',
            description: 'Focused on visual design, branding, and user-focused creative development using Figma and Canva. Engaged in industry workflows.'
        },
        {
            role: 'Web Development Intern',
            company: 'InternPe',
            description: 'Transformed UI designs into functional, responsive web pages using HTML, CSS, and JavaScript with emphasis on layout implementation.'
        }
    ];

    return (
        <section id="experience" className="section experience-section">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    Work Experience
                </motion.h2>

                <div className="timeline">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            className="timeline-item"
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.6 }}
                        >
                            <div className="timeline-content">
                                <div className="timeline-icon">
                                    <Briefcase size={20} />
                                </div>
                                <h3>{exp.role}</h3>
                                <h4>{exp.company}</h4>
                                <p>{exp.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
