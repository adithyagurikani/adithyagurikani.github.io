import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Experience.css';

const Experience = () => {
    const [activeTab, setActiveTab] = useState('education');

    const experiences = {
        education: {
            title: "Bachelor's in Computer Science",
            company: 'S J C Institute of Technology',
            date: '2022 - 2026',
            responsibilities: [
                'Currently pursuing B.E. in Computer Science and Engineering with a CGPA focus',
                'Active participation in technical projects and coding competitions',
                'Developed strong foundation in data structures, algorithms, and software engineering',
                'Engaged in hands-on learning through internships and real-world projects'
            ]
        },
        internship: {
            title: 'React.js Developer',
            company: 'Internship',
            date: 'Recent',
            responsibilities: [
                'Built and styled interactive web pages using HTML, CSS, and React.js',
                'Worked on small UI modules and component-based architecture',
                'Strengthened foundational frontend development skills',
                'Collaborated with team members on responsive design implementations'
            ]
        },
        certifications: {
            title: 'Professional Certifications',
            company: 'CISCO & Infosys',
            date: '2023 - 2024',
            responsibilities: [
                'Core Programming Concepts using Python - CISCO Networking Academy',
                'Deep Sales Training: The Art of Persuasion and Selling - Infosys Springboard',
                'Completed hands-on projects demonstrating practical application of learned concepts',
                'Gained industry-recognized credentials in programming and business skills'
            ]
        }
    };

    return (
        <motion.section
            id="experience"
            className="experience section container"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
        >
            <motion.h2
                className="section-title"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <span className="section-number">02.</span> Education & Experience
            </motion.h2>

            <div className="experience-tabs">
                <div className="tab-list">
                    {Object.entries(experiences).map(([key, exp]) => (
                        <motion.button
                            key={key}
                            className={`tab-btn ${activeTab === key ? 'active' : ''}`}
                            onClick={() => setActiveTab(key)}
                            whileHover={{ x: 5 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            {exp.company}
                        </motion.button>
                    ))}
                </div>

                <div className="tab-content">
                    <AnimatePresence mode="wait">
                        {Object.entries(experiences).map(([key, exp]) => (
                            activeTab === key && (
                                <motion.div
                                    key={key}
                                    className="job-desc active"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <h3>
                                        {exp.title} <span className="company">@ {exp.company}</span>
                                    </h3>
                                    <p className="job-date">{exp.date}</p>
                                    <ul>
                                        {exp.responsibilities.map((resp, index) => (
                                            <motion.li
                                                key={index}
                                                initial={{ opacity: 0, x: -10 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: index * 0.1 }}
                                            >
                                                {resp}
                                            </motion.li>
                                        ))}
                                    </ul>
                                </motion.div>
                            )
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </motion.section>
    );
};

export default Experience;
