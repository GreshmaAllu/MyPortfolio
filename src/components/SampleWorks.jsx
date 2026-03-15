import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/SampleWorks.css';

// Importing images
import growthForImpact from '../assets/images/Design Tasks/Growth For Impact.jpg';
import docoPrint from '../assets/images/Design Tasks/DocoPrint Task.jpg';

import ecommerceLanding from '../assets/images/Ui challenges/Ecommerce Landing Page.png';
import ecommerceCheckout from '../assets/images/Ui challenges/Ecommmerce Checkoutscreen.png';
import financialApp from '../assets/images/Ui challenges/Financial App.png';
import healthcare from '../assets/images/Ui challenges/Healthcare platform.png';
import illustrations from '../assets/images/Ui challenges/Illustrations.png';
import musicApp from '../assets/images/Ui challenges/Music App.png';
import virtualClassroom from '../assets/images/Ui challenges/Virtual Classroom.png';

const SampleWorks = () => {
    const [selectedImage, setSelectedImage] = React.useState(null);
    const [isModalOpen, setIsModalOpen] = React.useState(false);

    const closeModal = React.useCallback(() => {
        setIsModalOpen(false);
        setTimeout(() => setSelectedImage(null), 300); // Wait for animation
    }, []);

    const openModal = (image) => {
        setSelectedImage(image);
        setIsModalOpen(true);
    };

    React.useEffect(() => {
        const handleEsc = (event) => {
            if (event.key === 'Escape') closeModal();
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [closeModal]);

    const designTasks = [
        {
            title: 'Growth for Impact',
            image: growthForImpact,
            category: 'Design Task',
            description: 'Designing a simple and clear job platform for different types of sustainability-focused users.'
        },
        {
            title: 'DocoPrint Task',
            image: docoPrint,
            category: 'UX Case Study',
            description: 'A comprehensive document printing solution.'
        }
    ];

    const uiChallenges = [
        { title: 'Ecommerce Landing Page', image: ecommerceLanding, category: 'UI Redesign', description: 'Modern shopping experience.' },
        { title: 'Ecommerce Checkout', image: ecommerceCheckout, category: 'UI Redesign', description: 'Streamlined checkout flow.' },
        { title: 'Financial App', image: financialApp, category: 'UI Case Study', description: 'Banking and finance management.' },
        { title: 'Healthcare Platform', image: healthcare, category: 'UX Case Study', description: 'Patient management dashboard.' },
        { title: 'Illustrations', image: illustrations, category: 'UI Design', description: 'Custom vector illustrations.' },
        { title: 'Music App', image: musicApp, category: 'UI Case Study', description: 'Immersive music player interface.' },
        { title: 'Virtual Classroom', image: virtualClassroom, category: 'UX Design', description: 'Distance learning platform.' }
    ];

    const allWorks = [...designTasks, ...uiChallenges];

    return (
        <section id="designworks" className="section sample-section">
            <div className="container">
                <div className="section-header">
                    <motion.h2
                        className="section-title"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        Design Works
                    </motion.h2>
                    <motion.p
                        className="section-subtitle"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Selected UI/UX case studies and interface explorations.
                    </motion.p>
                </div>

                <div className="sample-grid">
                    {allWorks.map((work, index) => (
                        <motion.div
                            key={index}
                            className="sample-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                        >
                            <div className="card-image-wrapper">
                                <img src={work.image} alt={work.title} className="card-image" loading="lazy" />
                                <div className="card-overlay"></div>
                                <div className="card-badge">{work.category}</div>
                                <div className="card-content">
                                    <h3 className="card-title">{work.title}</h3>
                                    <p className="card-description">{work.description}</p>
                                </div>
                                <div className="card-action">
                                    <button
                                        className="action-btn"
                                        onClick={() => openModal(work.image)}
                                        aria-label={`View ${work.title}`}
                                    >
                                        View Full Design
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Modal */}
            <AnimatePresence>
                {isModalOpen && (
                    <motion.div
                        className="modal-backdrop"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeModal}
                    >
                        <motion.div
                            className="modal-content"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button className="modal-close" onClick={closeModal} aria-label="Close modal">&times;</button>
                            <img src={selectedImage} alt="Project Full View" className="modal-image" />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default SampleWorks;
