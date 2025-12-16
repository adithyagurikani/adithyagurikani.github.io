import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import './About.css';

const About = () => {
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

    const education = [
        {
            degree: "Bachelor's in Computer Science and Engineering",
            institution: 'S J C Institute of Technology, Chikkaballapur',
            period: '2022 – 2026',
            grade: 'CGPA'
        },
        {
            degree: 'Pre-University Course (PUC)',
            institution: 'BGS PU College, Chikkaballapur',
            period: '2020 – 2022',
            grade: '73%'
        },
        {
            degree: 'Secondary School Leaving Certificate (SSLC)',
            institution: 'Good Shepherd School, Chikkaballapur',
            period: '2019 – 2020',
            grade: '75.2%'
        }
    ];

    const skillCategories = [
        { title: 'Languages', skills: ['Python', 'JavaScript', 'TypeScript', 'Java', 'HTML/CSS'] },
        { title: 'Frontend', skills: ['React', 'Next.js', 'Framer Motion', 'Responsive Design'] },
        { title: 'AI & Systems', skills: ['OpenAI API', 'Computer Vision', 'Deep Learning', 'TensorFlow'] },
        { title: 'Tools', skills: ['Git', 'MongoDB', 'WordPress', 'Cloud Services'] }
    ];

    const certifications = [
        { name: 'Core Programming Concepts using Python', org: 'CISCO Networking Academy' },
        { name: 'The Art of Persuasion and Selling', org: 'Infosys Springboard' }
    ];

    const interests = ['Java Development', 'Digital Marketing', 'Web Development'];

    return (
        <section id="about" className="about section" ref={ref}>
            <div className="container">
                <motion.h2
                    className="section-title"
                    custom={0}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={fadeIn}
                >
                    About
                </motion.h2>

                <motion.div
                    className="about-intro"
                    custom={1}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={fadeIn}
                >
                    <p>
                        Computer Science student at S J C Institute of Technology, focused on building
                        intelligent, user-centered applications. I work at the intersection of frontend
                        development and applied AI, combining clean code with thoughtful design.
                    </p>
                    <p>
                        My approach is simple: understand the problem deeply, build with precision,
                        and create solutions that feel inevitable. From voice-enabled AI assistants
                        to computer vision systems, I'm drawn to projects where technology solves
                        real challenges.
                    </p>
                </motion.div>

                {/* Education Section */}
                <div className="education-section">
                    <motion.h3
                        className="subsection-title"
                        custom={2}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        variants={fadeIn}
                    >
                        Education
                    </motion.h3>

                    <div className="education-list">
                        {education.map((edu, index) => (
                            <motion.div
                                key={edu.degree}
                                className="education-item"
                                custom={3 + index}
                                initial="hidden"
                                animate={isInView ? "visible" : "hidden"}
                                variants={fadeIn}
                            >
                                <div className="edu-header">
                                    <div>
                                        <h4 className="edu-degree">{edu.degree}</h4>
                                        <p className="edu-institution">{edu.institution}</p>
                                    </div>
                                    <div className="edu-meta">
                                        <span className="edu-period">{edu.period}</span>
                                        <span className="edu-grade">{edu.grade}</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Skills Section */}
                <div className="skills-section">
                    <motion.h3
                        className="subsection-title"
                        custom={6}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        variants={fadeIn}
                    >
                        Technical Skills
                    </motion.h3>

                    <div className="skills-grid">
                        {skillCategories.map((category, index) => (
                            <motion.div
                                key={category.title}
                                className="skill-group"
                                custom={7 + index}
                                initial="hidden"
                                animate={isInView ? "visible" : "hidden"}
                                variants={fadeIn}
                            >
                                <h4 className="skill-group-title">{category.title}</h4>
                                <div className="skill-tags">
                                    {category.skills.map(skill => (
                                        <span key={skill} className="badge">{skill}</span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Certifications Section */}
                <div className="certifications-section">
                    <motion.h3
                        className="subsection-title"
                        custom={11}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        variants={fadeIn}
                    >
                        Certifications
                    </motion.h3>

                    <div className="cert-list">
                        {certifications.map((cert, index) => (
                            <motion.div
                                key={cert.name}
                                className="cert-item"
                                custom={12 + index}
                                initial="hidden"
                                animate={isInView ? "visible" : "hidden"}
                                variants={fadeIn}
                            >
                                <div className="cert-name">{cert.name}</div>
                                <div className="cert-org">{cert.org}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Areas of Interest */}
                <div className="interests-section">
                    <motion.h3
                        className="subsection-title"
                        custom={14}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        variants={fadeIn}
                    >
                        Areas of Interest
                    </motion.h3>

                    <motion.div
                        className="interests-list"
                        custom={15}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        variants={fadeIn}
                    >
                        {interests.map(interest => (
                            <span key={interest} className="badge">{interest}</span>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
