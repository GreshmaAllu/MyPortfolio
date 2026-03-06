import React, { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, PlayCircle, X, Maximize2 } from 'lucide-react';
import '../styles/MyWorks.css';

// Importing images
// UI Challenges
import ecommerceLanding from '../assets/images/Ui challenges/Ecommerce Landing Page.png';
import ecommerceCheckout from '../assets/images/Ui challenges/Ecommmerce Checkoutscreen.png';
import financialApp from '../assets/images/Ui challenges/Financial App.png';
import healthcare from '../assets/images/Ui challenges/Healthcare platform.png';
import illustrations from '../assets/images/Ui challenges/Illustrations.png';
import musicApp from '../assets/images/Ui challenges/Music App.png';
import virtualClassroom from '../assets/images/Ui challenges/Virtual Classroom.png';

// Design Tasks
import goPratleDesign from '../assets/images/Design Tasks/GoPratle design Task.jpg';
import docoPrint from '../assets/images/Design Tasks/DocoPrint Task.jpg';
import rabloDesign from '../assets/images/Design Tasks/Rablo’s Design task.jpg';
import suprazoDesign from '../assets/images/Design Tasks/Suprazo Design task.jpg';

// Logos (Graphic Design)
import artifexLogo from '../assets/images/Logos/Artifex website logo.jpg';
import nurseryLogo from '../assets/images/Logos/Nursery app Logo.jpg';
import moonMountLogo from '../assets/images/Logos/moon mount restaurant logo.jpg';

// Tech Projects
import nurseryVideo from '../assets/images/Tech Projects/NurseryApp.mp4';
import myntraVideo from '../assets/images/Tech Projects/Myntra.mp4';
import artifexVideo from '../assets/images/Tech Projects/Artifex ecommerce.mp4';


const MyWorks = () => {
    const [activeTab, setActiveTab] = useState('all');
    const [activeSubTab, setActiveSubTab] = useState('ui-challenges');
    const [selectedItem, setSelectedItem] = useState(null);
    const [modalType, setModalType] = useState(null); // 'image' or 'video'

    const mainTabs = [
        { id: 'all', label: 'All Works' },
        { id: 'design', label: 'Design Works' },
        { id: 'tech', label: 'AI-Driven Frontend Projects' }
    ];

    const designSubTabs = [
        { id: 'ui-challenges', label: 'UI Challenges' },
        { id: 'design-tasks', label: 'Design Tasks' },
        // { id: 'case-studies', label: 'Case Studies' },
        { id: 'graphic-design', label: 'Graphic Design' }
    ];

    const designWorks = [
        // UI Challenges
        { id: 1, title: 'Ecommerce Landing Page', image: ecommerceLanding, category: 'ui-challenges', type: 'design', badge: 'UI Challenge', description: 'Modern shopping experience.' },
        { id: 2, title: 'Ecommerce Checkout', image: ecommerceCheckout, category: 'ui-challenges', type: 'design', badge: 'UI Challenge', description: 'Streamlined checkout flow.' },
        { id: 15, title: 'Financial App', image: financialApp, category: 'ui-challenges', type: 'design', badge: 'UI Challenge', description: 'Banking and finance management.' },
        { id: 16, title: 'Healthcare Platform', image: healthcare, category: 'ui-challenges', type: 'design', badge: 'UI Challenge', description: 'Patient management dashboard.' },
        { id: 17, title: 'Illustrations', image: illustrations, category: 'ui-challenges', type: 'design', badge: 'UI Challenge', description: 'Custom vector illustrations.' },
        { id: 18, title: 'Music App', image: musicApp, category: 'ui-challenges', type: 'design', badge: 'UI Challenge', description: 'Immersive music player interface.' },
        { id: 19, title: 'Virtual Classroom', image: virtualClassroom, category: 'ui-challenges', type: 'design', badge: 'UI Challenge', description: 'Distance learning platform.' },

        // Design Tasks
        { id: 22, title: 'GoPratle Design Task', image: goPratleDesign, category: 'design-tasks', type: 'design', badge: 'Design Task', description: 'Innovative design concepts for GoPratle.' },
        { id: 8, title: 'DocoPrint Task', image: docoPrint, category: 'design-tasks', type: 'design', badge: 'Design Task', description: 'A comprehensive document printing solution.' },
        { id: 20, title: 'Rablo’s Design Task', image: rabloDesign, category: 'design-tasks', type: 'design', badge: 'Design Task', description: 'Creative design solutions for Rablo.' },
        { id: 21, title: 'Suprazo Design Task', image: suprazoDesign, category: 'design-tasks', type: 'design', badge: 'Design Task', description: 'UI/UX enhancements for Suprazo.' },

        // Graphic Design (Logos)
        { id: 12, title: 'Artifex Website Logo', image: artifexLogo, category: 'graphic-design', type: 'design', badge: 'Graphic Design', description: 'Brand identity for Artifex.' },
        { id: 13, title: 'Nursery App Logo', image: nurseryLogo, category: 'graphic-design', type: 'design', badge: 'Graphic Design', description: 'Visual identity for a nursery plant app.' },
        { id: 14, title: 'Moon Mount Restaurant Logo', image: moonMountLogo, category: 'graphic-design', type: 'design', badge: 'Graphic Design', description: 'Elegant logo for a restaurant.' }
    ];

    const techProjects = [
        {
            id: 9,
            title: 'Nursery Management App',
            type: 'tech',
            description: 'Comprehensive Android application for managing nursery operations, plant shopping, and backend inventory control.',
            tags: ['Kotlin', 'Spring Boot', 'MySQL'],
            videoUrl: nurseryVideo,
            github: '#',
            demo: '#'
        },
        {
            id: 10,
            title: 'CelebStyle Fashion',
            type: 'tech',
            description: 'Concept feature for Myntra shopping from social feeds.',
            tags: ['React', 'Figma', 'AI'],
            videoUrl: myntraVideo,
            github: '#',
            demo: '#'
        },
        {
            id: 11,
            title: 'E-commerce Website',
            type: 'tech',
            description: 'Modern, minimal e-commerce interface design.',
            tags: ['React', 'CSS3', 'Animate'],
            videoUrl: artifexVideo,
            github: '#',
            demo: '#'
        }
    ];

    const filteredWorks = () => {
        if (activeTab === 'all') return [...designWorks, ...techProjects];
        if (activeTab === 'tech') return techProjects;
        return designWorks.filter(work => work.category === activeSubTab);
    };

    const openModal = (item, type) => {
        setSelectedItem(item);
        setModalType(type);
    };

    const closeModal = useCallback(() => {
        setSelectedItem(null);
        setModalType(null);
    }, []);

    useEffect(() => {
        const handleEsc = (e) => { e.key === 'Escape' && closeModal(); };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [closeModal]);

    return (
        <section id="myworks" className="myworks-section">
            <div className="container">
                <div className="section-header">
                    <motion.h2
                        className="section-title"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        My Works
                    </motion.h2>
                </div>

                {/* Level 1 Tabs */}
                <div className="tabs-container main-tabs">
                    {mainTabs.map(tab => (
                        <button
                            key={tab.id}
                            className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
                            onClick={() => setActiveTab(tab.id)}
                        >
                            {tab.label}
                            {activeTab === tab.id && (
                                <motion.div layoutId="underline" className="tab-underline" />
                            )}
                        </button>
                    ))}
                </div>

                {/* Level 2 Tabs (Design only) */}
                <AnimatePresence mode="wait">
                    {activeTab === 'design' && (
                        <motion.div
                            className="tabs-container sub-tabs"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                        >
                            {designSubTabs.map(tab => (
                                <button
                                    key={tab.id}
                                    className={`sub-tab-btn ${activeSubTab === tab.id ? 'active' : ''}`}
                                    onClick={() => setActiveSubTab(tab.id)}
                                >
                                    {tab.label}
                                </button>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Grid */}
                <motion.div
                    layout
                    className="works-grid"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredWorks().map((work) => (
                            <motion.div
                                layout
                                key={work.id}
                                className={`work-card ${work.type === 'tech' ? 'tech-card' : 'design-card'}`}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.4 }}
                            >
                                {work.type === 'design' ? (
                                    <div className="card-inner" onClick={() => openModal(work, 'image')}>
                                        <div className="card-image">
                                            <img src={work.image} alt={work.title} loading="lazy" />
                                            <div className="card-badge">{work.badge}</div>
                                            <div className="card-hover-overlay">
                                                <Maximize2 size={32} />
                                            </div>
                                        </div>
                                        <div className="card-info">
                                            <h3>{work.title}</h3>
                                            <p>{work.description}</p>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="card-inner">
                                        <div className="card-preview" onClick={() => openModal(work, 'video')}>
                                            {work.image ? (
                                                <div className="card-image tech-image">
                                                    <img src={work.image} alt={work.title} loading="lazy" />
                                                </div>
                                            ) : (
                                                <div className="video-placeholder">
                                                    <PlayCircle size={48} />
                                                </div>
                                            )}
                                            <div className="card-hover-overlay">
                                                <PlayCircle size={32} />
                                                <span>Watch Demo</span>
                                            </div>
                                        </div>
                                        <div className="card-info">
                                            <h3>{work.title}</h3>
                                            <p>{work.description}</p>
                                            <div className="tech-tags">
                                                {work.tags.map(tag => <span key={tag}>{tag}</span>)}
                                            </div>
                                            <div className="card-actions">
                                                <button className="watch-btn" onClick={() => openModal(work, 'video')}>Watch Demo</button>
                                                <a href={work.github} className="code-btn"><Github size={18} /> Code</a>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>

            {/* Modals */}
            <AnimatePresence>
                {selectedItem && (
                    <motion.div
                        className="modal-overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeModal}
                    >
                        <button className="close-modal" onClick={closeModal}><X size={32} /></button>
                        <motion.div
                            className={`modal-box ${modalType === 'video' ? 'video-modal' : ''}`}
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            onClick={e => e.stopPropagation()}
                        >
                            {modalType === 'image' ? (
                                <img src={selectedItem.image} alt={selectedItem.title} />
                            ) : (
                                <video
                                    src={selectedItem.videoUrl}
                                    controls
                                    autoPlay
                                    loop
                                    className="modal-video"
                                    style={{ width: '100%', maxHeight: '80vh', borderRadius: '12px' }}
                                />
                            )}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section >
    );
};

export default MyWorks;
