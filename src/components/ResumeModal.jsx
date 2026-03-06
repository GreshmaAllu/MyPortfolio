import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, Maximize2 } from 'lucide-react';
import '../styles/ResumeModal.css';

const ResumeModal = ({ isOpen, onClose, resumeFile }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="resume-modal-overlay"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                >
                    <motion.div
                        className="resume-modal-container"
                        initial={{ scale: 0.8, opacity: 0, y: 50 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.8, opacity: 0, y: 50 }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="resume-modal-header">
                            <h3>My Resume</h3>
                            <div className="resume-modal-actions">
                                <a href={resumeFile} download className="modal-action-btn" title="Download Resume">
                                    <Download size={20} />
                                </a>
                                <button className="modal-close-btn" onClick={onClose} title="Close">
                                    <X size={24} />
                                </button>
                            </div>
                        </div>
                        <div className="resume-modal-body">
                            <img
                                src={resumeFile}
                                alt="Greshma Allu Resume"
                                className="resume-jpg"
                            />
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default ResumeModal;
