import React from 'react';
import { motion } from 'framer-motion';
import { Download, Eye } from 'lucide-react';
import resumeImg from '../assets/images/Greshma.Allu_Resume.jpg';
import '../styles/ResumePreview.css';

const ResumePreview = ({ onOpenResume }) => {
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = resumeImg;
        link.download = 'Greshma_Allu_Resume.jpg';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <section id="resume-preview" className="section resume-preview-section">
            <div className="container">
                <motion.div
                    className="resume-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title">Resume Preview</h2>
                    <p className="section-subtitle">A quick glance at my professional background and skills.</p>
                </motion.div>

                <div className="resume-preview-container">
                    <motion.div
                        className="resume-paper-wrapper"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="resume-paper">
                            <img
                                src={resumeImg}
                                alt="Greshma Allu Resume"
                                className="resume-preview-img"
                            />
                            <div className="resume-overlay">
                                <div className="resume-actions">
                                    <button
                                        className="action-btn preview-btn"
                                        onClick={onOpenResume}
                                        title="View Fullscreen"
                                    >
                                        <Eye size={24} />
                                        <span>Full View</span>
                                    </button>
                                    <button
                                        className="action-btn download-btn"
                                        onClick={handleDownload}
                                        title="Download Resume"
                                    >
                                        <Download size={24} />
                                        <span>Download</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <div className="resume-mobile-actions">
                        <button className="btn primary-btn" onClick={onOpenResume}>
                            <Eye size={20} /> View Full
                        </button>
                        <button className="btn secondary-btn" onClick={handleDownload}>
                            <Download size={20} /> Download
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ResumePreview;
