import { motion } from 'framer-motion';
import { Github, Instagram, Twitter, Linkedin, Mail } from 'lucide-react';
import './SocialSidebar.css';

const SocialSidebar = () => {
    const socials = [
        { icon: Github, href: 'https://github.com/adithyagurikani', label: 'GitHub' },
        { icon: Linkedin, href: 'https://www.linkedin.com/in/adithya-g', label: 'LinkedIn' },
        { icon: Mail, href: 'mailto:adithyagurikani@gmail.com', label: 'Email' },
        { icon: Twitter, href: '#', label: 'Twitter' },
        { icon: Instagram, href: '#', label: 'Instagram' },
    ];

    return (
        <motion.div
            className="side-element left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
        >
            <ul className="social-list">
                {socials.map((social, index) => (
                    <motion.li
                        key={social.label}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.2 + index * 0.1 }}
                    >
                        <motion.a
                            href={social.href}
                            aria-label={social.label}
                            whileHover={{ y: -3, color: 'var(--green)' }}
                            whileTap={{ scale: 0.9 }}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <social.icon size={20} />
                        </motion.a>
                    </motion.li>
                ))}
            </ul>
        </motion.div>
    );
};

export default SocialSidebar;
