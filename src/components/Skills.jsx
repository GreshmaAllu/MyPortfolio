import React from 'react';
import { motion } from 'framer-motion';
import { Palette, Code, PenTool, Layout, Smartphone, Database, Terminal, Figma, Layers } from 'lucide-react';
import '../styles/Skills.css';

const Skills = () => {
    const row1Skills = [
        { name: 'Design Thinking', icon: <Layers size={20} /> },
        { name: 'User Research', icon: <Layout size={20} /> },
        { name: 'Visual Design', icon: <Palette size={20} /> },
        { name: 'Wireframing', icon: <PenTool size={20} /> },
        { name: 'Prototyping', icon: <Smartphone size={20} /> },
        { name: 'User Flow Design', icon: <Layers size={20} /> },
        { name: 'Information Architecture', icon: <Database size={20} /> },
    ];

    const row2Skills = [
        { name: 'Figma', icon: <Figma size={20} /> },
        { name: 'Canva', icon: <PenTool size={20} /> },
        { name: 'VS Code', icon: <Code size={20} /> },
        { name: 'GitHub', icon: <Terminal size={20} /> },
        { name: 'AI Tools', icon: <Terminal size={20} /> },
        { name: 'HTML', icon: <Code size={20} /> },
        { name: 'CSS', icon: <Palette size={20} /> },
        { name: 'JavaScript', icon: <Code size={20} /> },
    ];

    // Doubling the lists for seamless infinite loop
    const fullRow1 = [...row1Skills, ...row1Skills, ...row1Skills];
    const fullRow2 = [...row2Skills, ...row2Skills, ...row2Skills];

    return (
        <section id="skills" className="section skills-section">
            <div className="container">
                <motion.h2
                    className="section-title marquee-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    Skills and Tools
                </motion.h2>

                <div className="marquee-container">
                    {/* Row 1: Leftward */}
                    <div className="marquee-row">
                        <motion.div
                            className="marquee-track"
                            animate={{ x: [0, -1000] }}
                            transition={{
                                duration: 25,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                        >
                            {fullRow1.map((skill, i) => (
                                <div key={`r1-${i}`} className="skill-badge">
                                    {skill.icon}
                                    <span>{skill.name}</span>
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Row 2: Rightward */}
                    <div className="marquee-row">
                        <motion.div
                            className="marquee-track"
                            animate={{ x: [-1000, 0] }}
                            transition={{
                                duration: 25,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                        >
                            {fullRow2.map((skill, i) => (
                                <div key={`r2-${i}`} className="skill-badge">
                                    {skill.icon}
                                    <span>{skill.name}</span>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
