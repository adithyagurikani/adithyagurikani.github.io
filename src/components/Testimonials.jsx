import { motion } from 'framer-motion';
import { Award, Lightbulb, Target } from 'lucide-react';
import './Testimonials.css';

const Testimonials = () => {
    const highlights = [
        {
            icon: Award,
            title: 'Key Achievement',
            description: 'Developed an Automatic Number Plate Recognition (ANPR) system using Python, OpenCV, and Tesseract to extract and recognize vehicle plate numbers from video streams.',
            category: 'Technical Excellence'
        },
        {
            icon: Lightbulb,
            title: 'Career Skills',
            description: 'Strong problem-solving abilities and logical thinking approach to tackle complex technical challenges. Passionate about finding innovative solutions to real-world problems.',
            category: 'Core Strengths'
        },
        {
            icon: Target,
            title: 'Areas of Interest',
            description: 'Focused on Java development, digital marketing strategies, and modern web development technologies. Eager to explore the intersection of technology and business.',
            category: 'Professional Focus'
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5
            }
        }
    };

    return (
        <motion.section
            id="testimonials"
            className="testimonials section container"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
        >
            <motion.h2
                className="section-title"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <span className="section-number">04.</span> Highlights & Strengths
            </motion.h2>

            <div className="testimonial-grid">
                {highlights.map((highlight, index) => {
                    const IconComponent = highlight.icon;
                    return (
                        <motion.div
                            key={index}
                            className="testimonial-card"
                            variants={cardVariants}
                            whileHover={{
                                y: -10,
                                boxShadow: '0 20px 40px -20px var(--navy-shadow)'
                            }}
                            transition={{ duration: 0.3 }}
                        >
                            <motion.div
                                className="quote-icon"
                                whileHover={{ rotate: 360 }}
                                transition={{ duration: 0.5 }}
                            >
                                <IconComponent size={24} />
                            </motion.div>
                            <h3 style={{
                                color: 'var(--lightest-slate)',
                                fontSize: 'var(--fz-xl)',
                                marginBottom: '10px',
                                fontWeight: '600'
                            }}>
                                {highlight.title}
                            </h3>
                            <p>{highlight.description}</p>
                            <div className="author">
                                <span>{highlight.category}</span>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </motion.section>
    );
};

export default Testimonials;
