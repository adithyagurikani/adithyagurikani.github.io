import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import './Hero.css';

const Hero = () => {
    const textReveal = {
        hidden: { opacity: 0, y: 30 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                delay: i * 0.15,
                ease: [0.4, 0, 0.2, 1]
            }
        })
    };

    return (
        <section className="hero">
            <div className="container">
                <div className="hero-content">
                    <motion.h1
                        className="hero-title"
                        custom={0}
                        initial="hidden"
                        animate="visible"
                        variants={textReveal}
                    >
                        Adithya G
                    </motion.h1>

                    <motion.p
                        className="hero-role"
                        custom={1}
                        initial="hidden"
                        animate="visible"
                        variants={textReveal}
                    >
                        Software Engineer · Frontend & Applied AI
                    </motion.p>

                    <motion.p
                        className="hero-statement"
                        custom={2}
                        initial="hidden"
                        animate="visible"
                        variants={textReveal}
                    >
                        Building intelligent systems through thoughtful code and intentional design.
                    </motion.p>

                    <motion.div
                        className="hero-actions"
                        custom={3}
                        initial="hidden"
                        animate="visible"
                        variants={textReveal}
                    >
                        <a href="#projects" className="btn btn-primary">
                            View Projects <ArrowRight size={16} />
                        </a>
                        <a href="/resume.pdf" className="btn btn-secondary" target="_blank">
                            <Download size={16} /> Resume
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
