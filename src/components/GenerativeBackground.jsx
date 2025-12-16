import { useEffect, useRef } from 'react';
import './GenerativeBackground.css';

const GenerativeBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        let animationFrameId;
        let particles = [];
        let mouseX = 0;
        let mouseY = 0;

        // Detect theme
        const isDark = () => document.documentElement.getAttribute('data-theme') === 'dark';

        // Set canvas size
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        // Track mouse position
        const handleMouseMove = (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        };
        window.addEventListener('mousemove', handleMouseMove);

        // Particle class
        class Particle {
            constructor() {
                this.reset();
                this.baseX = this.x;
                this.baseY = this.y;
            }

            reset() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.baseX = this.x;
                this.baseY = this.y;
                this.vx = (Math.random() - 0.5) * 0.3;
                this.vy = (Math.random() - 0.5) * 0.3;
                this.size = Math.random() * 2 + 0.5;
                this.opacity = Math.random() * 0.3 + 0.1;
            }

            update() {
                // Base movement
                this.baseX += this.vx;
                this.baseY += this.vy;

                // Wrap around edges
                if (this.baseX < 0) this.baseX = canvas.width;
                if (this.baseX > canvas.width) this.baseX = 0;
                if (this.baseY < 0) this.baseY = canvas.height;
                if (this.baseY > canvas.height) this.baseY = 0;

                // Subtle mouse influence
                const dx = mouseX - this.baseX;
                const dy = mouseY - this.baseY;
                const distance = Math.sqrt(dx * dx + dy * dy);
                const maxDistance = 200;

                if (distance < maxDistance) {
                    const force = (1 - distance / maxDistance) * 0.5;
                    this.x = this.baseX + dx * force * 0.1;
                    this.y = this.baseY + dy * force * 0.1;
                } else {
                    // Smoothly return to base position
                    this.x += (this.baseX - this.x) * 0.1;
                    this.y += (this.baseY - this.y) * 0.1;
                }
            }

            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);

                // Brighter particles in dark mode
                if (isDark()) {
                    ctx.fillStyle = `rgba(96, 165, 250, ${this.opacity * 1.5})`;
                } else {
                    ctx.fillStyle = `rgba(59, 130, 246, ${this.opacity})`;
                }
                ctx.fill();
            }
        }

        // Create particles
        const particleCount = Math.min(Math.floor((canvas.width * canvas.height) / 15000), 80);
        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }

        // Animation loop
        const animate = () => {
            // Clear with theme-aware trail effect
            if (isDark()) {
                ctx.fillStyle = 'rgba(10, 10, 10, 0.05)';
            } else {
                ctx.fillStyle = 'rgba(250, 250, 250, 0.05)';
            }
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Update and draw particles
            particles.forEach(particle => {
                particle.update();
                particle.draw();
            });

            // Draw connections between nearby particles
            particles.forEach((p1, i) => {
                particles.slice(i + 1).forEach(p2 => {
                    const dx = p1.x - p2.x;
                    const dy = p1.y - p2.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < 120) {
                        ctx.beginPath();
                        ctx.moveTo(p1.x, p1.y);
                        ctx.lineTo(p2.x, p2.y);

                        // Brighter connections in dark mode
                        const baseOpacity = (1 - distance / 120) * 0.15;
                        if (isDark()) {
                            ctx.strokeStyle = `rgba(96, 165, 250, ${baseOpacity * 2})`;
                        } else {
                            ctx.strokeStyle = `rgba(59, 130, 246, ${baseOpacity})`;
                        }
                        ctx.lineWidth = 0.5;
                        ctx.stroke();
                    }
                });
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        // Cleanup
        return () => {
            window.removeEventListener('resize', resizeCanvas);
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return <canvas ref={canvasRef} className="generative-background" />;
};

export default GenerativeBackground;
