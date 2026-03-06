import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, PlayCircle } from 'lucide-react';
import '../styles/Projects.css';

const Projects = () => {
    const projects = [
        {
            title: 'Nursery Management App',
            description: 'Comprehensive Android application for managing nursery operations. Digitalizing inventory, sales, and customer management.',
            tags: ['Kotlin', 'Spring Boot', 'MySQL', 'Figma', 'Android Studio'],
            link: '#',
            videoPlaceholder: true
        },
        {
            title: 'CelebStyle – Fashion Feature',
            description: 'Concept feature for Myntra allowing users to shop celebrity-inspired outfits directly from social media feeds.',
            tags: ['UI/UX Case Study', 'Figma', 'Prototyping', 'User Research'],
            link: '#',
            videoPlaceholder: true
        },
        {
            title: 'E-commerce Website UI',
            description: 'Modern, minimal e-commerce interface design focusing on user experience, smooth navigation, and conversion optimization.',
            tags: ['React', 'CSS3', 'Responsive Design', 'Animation'],
            link: '#',
            videoPlaceholder: false
        }
    ];

    return (
        <section id="projects" className="section projects-section">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    Featured Projects
                </motion.h2>

                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className="project-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.6 }}
                        >
                            <div className="project-preview">
                                {project.videoPlaceholder ? (
                                    <div className="placeholder-video">
                                        <PlayCircle size={48} />
                                        <span>View Demo</span>
                                    </div>
                                ) : (
                                    <div className="placeholder-image">
                                        <span>Project Preview</span>
                                    </div>
                                )}
                                <div className="project-overlay">
                                    <a href={project.link} className="project-link"><ExternalLink size={24} /></a>
                                </div>
                            </div>
                            <div className="project-content">
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                <div className="project-tags">
                                    {project.tags.map((tag, i) => (
                                        <span key={i}>{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
