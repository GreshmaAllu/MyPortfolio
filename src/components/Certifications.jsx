import React from 'react';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
import '../styles/Certifications.css';
import guviCert from '../assets/images/Certifications/Guvi Certification.png';
import weforshePhase2 from '../assets/images/Certifications/Myntra WeForShe Phase 2.jpg';
import rabloCert from '../assets/images/Certifications/Rablo 24 hr UiUx Hackathon.jpg';

const Certifications = () => {
    const certs = [
        {
            title: 'Mastering Figma: UI/UX Design',
            issuer: 'GUVI',
            image: guviCert
        },
        {
            title: 'Myntra HackerRamp: WeForShe 2024 (Phase 2)',
            issuer: 'Myntra',
            image: weforshePhase2
        },
        {
            title: 'Rablo.In 24-Hour UI/UX Design Hackathon',
            issuer: 'Rablo.In',
            image: rabloCert
        }
    ];

    return (
        <section id="certifications" className="section cert-section">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    Certifications & Awards
                </motion.h2>

                <div className="cert-grid">
                    {certs.map((cert, index) => (
                        <motion.div
                            key={index}
                            className="cert-card"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.6 }}
                        >
                            <div className="cert-image">
                                <img src={cert.image} alt={cert.title} />
                                <div className="cert-overlay">
                                    <Award size={32} />
                                </div>
                            </div>
                            <div className="cert-info">
                                <h3>{cert.title}</h3>
                                <p>{cert.issuer}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certifications;
