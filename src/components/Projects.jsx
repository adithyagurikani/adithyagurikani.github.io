import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import './Projects.css';

const Projects = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-80px" });

    const fadeIn = {
        hidden: { opacity: 0, y: 24 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.7,
                delay: i * 0.12,
                ease: [0.4, 0, 0.2, 1]
            }
        })
    };

    const projects = [
        {
            title: 'LawMate',
            problem: 'Making legal information accessible through conversational AI',
            approach: 'Built a voice-enabled AI legal assistant using OpenAI API with real-time speech recognition and natural language processing.',
            challenges: 'Integrating legal domain knowledge while maintaining accuracy and conversational flow.',
            outcome: 'Deployed full-stack application with responsive design and efficient API integration.',
            tech: ['TypeScript', 'React', 'Next.js', 'OpenAI API'],
            github: 'https://github.com/adithyagurikani/lawmate-voice-ai',
            live: 'https://adithyagurikani.github.io/lawmate-voice-ai/' // Update with actual URL
        },
        {
            title: 'ANPR System',
            problem: 'Automated vehicle identification for security and monitoring',
            approach: 'Developed computer vision system using Python and OpenCV for license plate recognition with character segmentation.',
            challenges: 'Achieving recognition accuracy across varying lighting conditions and camera angles.',
            outcome: 'Hybrid CNN-BiLSTM model achieving real-time processing with IoT integration.',
            tech: ['Python', 'OpenCV', 'TensorFlow', 'Deep Learning'],
            github: 'https://github.com/adithyagurikani',
            live: '#'
        },
        {
            title: 'Cloud Expense Tracker',
            problem: 'Simplifying financial management for individuals and teams',
            approach: 'Full-stack expense tracking platform with real-time data visualization and cloud infrastructure.',
            challenges: 'Designing intuitive UX for complex financial data while ensuring data security.',
            outcome: 'Production-ready application with responsive design and scalable architecture.',
            tech: ['JavaScript', 'React', 'Node.js', 'MongoDB'],
            github: 'https://github.com/adithyagurikani/cloud-expense-tracker',
            live: 'https://adithyagurikani.github.io/cloud-expense-tracker/' // Update with actual URL
        }
    ];

    return (
        <section id="projects" className="projects section" ref={ref}>
            <div className="container">
                <motion.h2
                    className="section-title"
                    custom={0}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={fadeIn}
                >
                    Projects
                </motion.h2>

                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            className="project-card card"
                            custom={index + 1}
                            initial="hidden"
                            animate={isInView ? "visible" : "hidden"}
                            variants={fadeIn}
                            onClick={() => {
                                if (project.live && project.live !== '#') {
                                    window.open(project.live, '_blank', 'noopener,noreferrer');
                                }
                            }}
                            style={{ cursor: project.live && project.live !== '#' ? 'pointer' : 'default' }}
                        >
                            <div className="project-header">
                                <h3 className="project-title link-underline">{project.title}</h3>
                                <div className="project-links">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="project-link"
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        <Github size={18} />
                                    </a>
                                    {project.live && project.live !== '#' && (
                                        <a
                                            href={project.live}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="project-link"
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            <ExternalLink size={18} />
                                        </a>
                                    )}
                                </div>
                            </div>

                            <p className="project-problem">{project.problem}</p>

                            <div className="project-details">
                                <div className="detail-section">
                                    <h4>Approach</h4>
                                    <p>{project.approach}</p>
                                </div>
                                <div className="detail-section">
                                    <h4>Challenge</h4>
                                    <p>{project.challenges}</p>
                                </div>
                                <div className="detail-section">
                                    <h4>Outcome</h4>
                                    <p>{project.outcome}</p>
                                </div>
                            </div>

                            <div className="project-tech">
                                {project.tech.map(tech => (
                                    <span key={tech} className="badge">{tech}</span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
