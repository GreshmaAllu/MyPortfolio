import React from 'react';
import { Linkedin, Github, Globe } from 'lucide-react';
import '../styles/Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-container">
                <div className="footer-social">
                    <a href="https://www.linkedin.com/in/greshma-allu-0129b32bb" target="_blank" rel="noopener noreferrer" className="footer-social-link">
                        <Linkedin size={20} />
                    </a>
                    <a href="https://github.com/GreshmaAllu" target="_blank" rel="noopener noreferrer" className="footer-social-link">
                        <Github size={20} />
                    </a>
                    <a href="https://www.behance.net/greshmaallu" target="_blank" rel="noopener noreferrer" className="footer-social-link">
                        <Globe size={20} />
                    </a>
                </div>
                <p className="copyright">&copy; {new Date().getFullYear()} Allu Greshma. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
