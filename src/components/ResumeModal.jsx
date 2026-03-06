import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, Maximize2 } from 'lucide-react';
import '../styles/ResumeModal.css';

const ResumeModal = ({ isOpen, onClose, resumeFile }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="resume-view-overlay"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <div className="resume-view-header">
                        <div className="resume-view-title">
                            <h3>Resume View</h3>
                        </div>
                        <div className="resume-view-actions">
                            <a
                                href={resumeFile}
                                download="Greshma_Allu_Resume.jpg"
                                className="resume-btn resume-download-btn"
                                title="Download Resume"
                            >
                                <Download size={20} />
                                <span>Download</span>
                            </a>
                            <button
                                className="resume-btn resume-close-btn"
                                onClick={onClose}
                                title="Close"
                            >
                                <X size={24} />
                                <span>Close</span>
                            </button>
                        </div>
                    </div>

                    <div className="resume-view-body" onClick={onClose}>
                        <motion.div
                            className="resume-view-paper"
                            initial={{ scale: 0.9, opacity: 0, y: 30 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 30 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img
                                src={resumeFile}
                                alt="Greshma Allu Resume"
                                className="resume-view-img"
                            />
                        </motion.div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default ResumeModal;
