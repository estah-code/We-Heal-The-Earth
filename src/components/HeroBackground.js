'use client';

import { useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';

// Floating particles + glowing orbs + earth image layered background
export default function HeroBackground({ variant = 'default' }) {
    const canvasRef = useRef(null);
    const { theme } = useTheme();

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');

        let animationId;
        let particles = [];
        let fireflies = [];
        let mouseX = 0;
        let mouseY = 0;

        function resize() {
            const parent = canvas.parentElement;
            if (!parent) return;
            canvas.width = parent.offsetWidth;
            canvas.height = parent.offsetHeight;
        }

        function createParticles() {
            particles = [];
            fireflies = [];
            const w = canvas.width;
            const h = canvas.height;

            let baseHue = 100;
            if (theme === 'ocean') baseHue = 35;

            // Rising growth particles (seeds/petals)
            for (let i = 0; i < 25; i++) {
                particles.push({
                    x: Math.random() * w,
                    y: Math.random() * h,
                    size: 1.5 + Math.random() * 3.5,
                    speedX: (Math.random() - 0.5) * 0.2,
                    speedY: -0.2 - Math.random() * 0.5,
                    opacity: 0.1 + Math.random() * 0.2,
                    hue: baseHue + (Math.random() * 30 - 15),
                    wobble: Math.random() * Math.PI * 2,
                    wobbleSpeed: 0.01 + Math.random() * 0.02,
                    parallaxFactor: 0.02 + Math.random() * 0.04,
                });
            }

            // Glimmering fireflies
            for (let i = 0; i < 15; i++) {
                fireflies.push({
                    x: Math.random() * w,
                    y: Math.random() * h,
                    size: 1 + Math.random() * 2,
                    speedX: (Math.random() - 0.5) * 0.15,
                    speedY: (Math.random() - 0.5) * 0.15,
                    opacity: 0,
                    maxOpacity: 0.2 + Math.random() * 0.3,
                    phase: Math.random() * Math.PI * 2,
                    phaseSpeed: 0.01 + Math.random() * 0.015,
                    glowSize: 10 + Math.random() * 20,
                    isGold: Math.random() > 0.7,
                    parallaxFactor: 0.05 + Math.random() * 0.05,
                });
            }
        }

        function draw() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            const w = canvas.width;
            const h = canvas.height;

            // Parallax offsets based on mouse
            const targetOffsetX = (mouseX - w / 2) * 0.05;
            const targetOffsetY = (mouseY - h / 2) * 0.05;

            particles.forEach((p) => {
                p.wobble += p.wobbleSpeed;
                p.x += p.speedX + Math.sin(p.wobble) * 0.2;
                p.y += p.speedY;

                if (p.y < -20) { p.y = h + 20; p.x = Math.random() * w; }
                if (p.x < -20) p.x = w + 20;
                if (p.x > w + 20) p.x = -20;

                const drawX = p.x + targetOffsetX * p.parallaxFactor;
                const drawY = p.y + targetOffsetY * p.parallaxFactor;

                ctx.save();
                ctx.globalAlpha = p.opacity;
                ctx.fillStyle = `hsla(${p.hue}, 40%, 65%, 1)`;
                ctx.beginPath();
                ctx.ellipse(drawX, drawY, p.size, p.size * 0.7, p.wobble, 0, Math.PI * 2);
                ctx.fill();

                const grad = ctx.createRadialGradient(drawX, drawY, 0, drawX, drawY, p.size * 4);
                grad.addColorStop(0, `hsla(${p.hue}, 40%, 65%, 0.1)`);
                grad.addColorStop(1, 'transparent');
                ctx.fillStyle = grad;
                ctx.fillRect(drawX - p.size * 4, drawY - p.size * 4, p.size * 8, p.size * 8);
                ctx.restore();
            });

            fireflies.forEach((f) => {
                f.phase += f.phaseSpeed;
                f.opacity = f.maxOpacity * (0.5 + 0.5 * Math.sin(f.phase));
                f.x += f.speedX;
                f.y += f.speedY;

                if (f.x < -50) f.x = w + 50;
                if (f.x > w + 50) f.x = -50;
                if (f.y < -50) f.y = h + 50;
                if (f.y > h + 50) f.y = -50;

                const drawX = f.x + targetOffsetX * f.parallaxFactor;
                const drawY = f.y + targetOffsetY * f.parallaxFactor;

                ctx.save();
                ctx.globalAlpha = f.opacity;
                let hue = f.isGold ? 45 : (theme === 'ocean' ? 35 : 120);
                const glow = ctx.createRadialGradient(drawX, drawY, 0, drawX, drawY, f.glowSize);
                glow.addColorStop(0, `hsla(${hue}, 60%, 70%, 0.4)`);
                glow.addColorStop(1, 'transparent');
                ctx.fillStyle = glow;
                ctx.fillRect(drawX - f.glowSize, drawY - f.glowSize, f.glowSize * 2, f.glowSize * 2);

                ctx.fillStyle = f.isGold ? '#fff' : '#b8f03e';
                ctx.beginPath();
                ctx.arc(drawX, drawY, f.size, 0, Math.PI * 2);
                ctx.fill();
                ctx.restore();
            });

            animationId = requestAnimationFrame(draw);
        }

        const handleMouseMove = (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        };

        resize();
        createParticles();
        draw();

        window.addEventListener('resize', () => { resize(); createParticles(); });
        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('resize', resize);
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationId);
        };
    }, [theme]);

    return (
        <div className="hero-bg-layers" aria-hidden="true">
            {/* Cinematic video layer */}
            <div className="hero-video-wrapper">
                <video 
                    autoPlay 
                    loop 
                    muted 
                    playsInline 
                    className="hero-video-bg"
                >
                    <source src="https://player.vimeo.com/external/370331493.sd.mp4?s=7b23158b1914ebc47a39d8995aeb74045f95f4e1&profile_id=139&oauth2_token_id=57447761" type="video/mp4" />
                </video>
            </div>

            {/* Canvas particle layer */}
            <canvas ref={canvasRef} className="hero-particles-canvas" />

            {/* Animated gradient mesh */}
            <div className="hero-gradient-mesh" />

            {/* Secondary soft orb */}
            <div className="hero-glow-orb hero-glow-orb-1" />
            <div className="hero-glow-orb hero-glow-orb-2" />

            {/* Vignette overlay */}
            <div className="hero-vignette" />
        </div>
    );
}
