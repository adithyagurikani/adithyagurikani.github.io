import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';
import './Contact.css';

const Contact = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-80px" });

    const fadeIn = {
        hidden: { opacity: 0, y: 24 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.7,
                delay: i * 0.1,
                ease: [0.4, 0, 0.2, 1]
            }
        })
    };

    const contacts = [
        {
            icon: Mail,
            label: 'Email',
            value: 'adithyagurikani@gmail.com',
            href: 'mailto:adithyagurikani@gmail.com'
        },
        {
            icon: Github,
            label: 'GitHub',
            value: 'adithyagurikani',
            href: 'https://github.com/adithyagurikani'
        },
        {
            icon: Linkedin,
            label: 'LinkedIn',
            value: 'Adithya G',
            href: 'https://www.linkedin.com/in/adithya-g'
        }
    ];

    return (
        <section id="contact" className="contact section" ref={ref}>
            <div className="container">
                <div className="contact-wrapper">
                    <motion.h2
                        className="section-title"
                        custom={0}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        variants={fadeIn}
                    >
                        Let's Connect
                    </motion.h2>

                    <motion.p
                        className="contact-intro"
                        custom={1}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        variants={fadeIn}
                    >
                        Currently seeking opportunities in software development.
                        Whether you have a question or just want to connect, I'd be happy to hear from you.
                    </motion.p>

                    <div className="contact-grid">
                        {contacts.map((contact, index) => {
                            const Icon = contact.icon;
                            return (
                                <motion.a
                                    key={contact.label}
                                    href={contact.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="contact-card"
                                    custom={2 + index}
                                    initial="hidden"
                                    animate={isInView ? "visible" : "hidden"}
                                    variants={fadeIn}
                                >
                                    <div className="contact-icon">
                                        <Icon size={20} />
                                    </div>
                                    <div className="contact-info">
                                        <div className="contact-label">{contact.label}</div>
                                        <div className="contact-value link-underline">{contact.value}</div>
                                    </div>
                                </motion.a>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
