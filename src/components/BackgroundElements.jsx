import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import './BackgroundElements.css';

const BackgroundElements = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({
                x: (e.clientX - window.innerWidth / 2) / 50,
                y: (e.clientY - window.innerHeight / 2) / 50
            });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div className="background-container">
            {/* Floating gradient blob 1 with cursor influence */}
            <motion.div
                className="gradient-blob blob-1"
                animate={{
                    x: [0, 100, 0],
                    y: [0, -80, 0],
                    scale: [1, 1.1, 1],
                    opacity: [0.15, 0.25, 0.15]
                }}
                style={{
                    x: mousePosition.x * 0.5,
                    y: mousePosition.y * 0.5
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />

            {/* Floating gradient blob 2 with cursor influence */}
            <motion.div
                className="gradient-blob blob-2"
                animate={{
                    x: [0, -120, 0],
                    y: [0, 100, 0],
                    scale: [1, 1.15, 1],
                    opacity: [0.12, 0.22, 0.12]
                }}
                style={{
                    x: mousePosition.x * -0.3,
                    y: mousePosition.y * -0.3
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2
                }}
            />

            {/* Floating gradient blob 3 with cursor influence */}
            <motion.div
                className="gradient-blob blob-3"
                animate={{
                    x: [0, 80, 0],
                    y: [0, -60, 0],
                    scale: [1, 1.2, 1],
                    opacity: [0.1, 0.2, 0.1]
                }}
                style={{
                    x: mousePosition.x * 0.4,
                    y: mousePosition.y * 0.4
                }}
                transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 5
                }}
            />

            {/* Abstract line element with cursor influence */}
            <motion.div
                className="abstract-line"
                animate={{
                    rotate: [0, 5, 0],
                    opacity: [0.05, 0.1, 0.05]
                }}
                style={{
                    x: mousePosition.x * 0.2,
                    y: mousePosition.y * 0.2
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />
        </div>
    );
};

export default BackgroundElements;
