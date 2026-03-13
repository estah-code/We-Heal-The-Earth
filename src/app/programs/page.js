'use client';

import { useState } from 'react';
import Link from 'next/link';
import HeroBackground from '@/components/HeroBackground';
import programsData from '@/data/programs.json';

export default function ProgramsPage() {
    const [programs] = useState(programsData);

    return (
        <div className="calendar-page">
            <section className="calendar-hero">
                <HeroBackground />
                <div className="hero-content">
                    <span className="eyebrow">Planet Run Calendar 2025</span>
                    <h1 className="hero-title">
                        A Year of <em>Purpose</em> and <em>Impact</em>
                    </h1>
                    <p className="hero-sub">
                        Our structured chronological series of global services and environmental runs.
                        Every month, a new mission to heal the earth.
                    </p>
                </div>
            </section>

            <section className="calendar-section">
                <div className="calendar-timeline">
                    {programs.map((p, i) => (
                        <div key={i} className="timeline-item" style={{ '--delay': `${i * 0.1}s` }}>
                            <div className="item-date">
                                <div className="date-main">
                                    <span className="month">{p.date.split(' ')[0]}</span>
                                    <span className="day">{p.date.split(' ')[1].replace(',', '')}</span>
                                </div>
                                <div className="year">2025</div>
                            </div>
                            
                            <div className="item-connector">
                                <div className="dot"></div>
                                <div className="line"></div>
                            </div>

                            <div className="item-content">
                                <div className="card-glass">
                                    <div className="card-header">
                                        <span className="cat-tag">{p.category}</span>
                                        <div className="service-icon">
                                            {/* Minimalist service branding */}
                                            <div className="pulse"></div>
                                        </div>
                                    </div>
                                    <h3 className="service-title">{p.title}</h3>
                                    <p className="service-desc">{p.description}</p>
                                    <div className="card-footer">
                                        <a href={p.link} target="_blank" rel="noopener noreferrer" className="visit-btn">
                                            Visit Program Site
                                            <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="3" fill="none">
                                                <path d="M5 12h14M12 5l7 7-7 7" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="join-global">
                <div className="join-card">
                    <h2>Become a <em>Global Ambassador</em></h2>
                    <p>Help us coordinate these runs and services in your local community.</p>
                    <Link href="/contact" className="action-pill">
                        Partner With Us
                    </Link>
                </div>
            </section>

            <style jsx>{`
                .calendar-page {
                    background: #050505;
                    min-height: 100vh;
                    color: white;
                    font-family: var(--font-outfit);
                }

                .calendar-hero {
                    position: relative;
                    padding: 160px 5% 100px;
                    text-align: center;
                    overflow: hidden;
                }

                .hero-content {
                    position: relative;
                    z-index: 2;
                    max-width: 900px;
                    margin: 0 auto;
                }

                .eyebrow {
                    display: inline-block;
                    font-size: 0.9rem;
                    font-weight: 800;
                    letter-spacing: 0.2em;
                    color: var(--lime);
                    text-transform: uppercase;
                    margin-bottom: 24px;
                    animation: fadeInUp 0.8s ease-out;
                }

                .hero-title {
                    font-size: clamp(3rem, 8vw, 6rem);
                    line-height: 0.9;
                    font-weight: 700;
                    letter-spacing: -0.04em;
                    margin-bottom: 30px;
                    animation: fadeInUp 1s ease-out backwards;
                }

                .hero-title em {
                    font-style: italic;
                    color: var(--lime);
                    font-weight: 400;
                }

                .hero-sub {
                    font-size: 1.25rem;
                    opacity: 0.7;
                    max-width: 650px;
                    margin: 0 auto;
                    line-height: 1.6;
                    animation: fadeInUp 1.2s ease-out backwards;
                }

                .calendar-section {
                    padding: 80px 5% 150px;
                    position: relative;
                }

                .calendar-timeline {
                    max-width: 1000px;
                    margin: 0 auto;
                    position: relative;
                }

                .timeline-item {
                    display: flex;
                    gap: 40px;
                    margin-bottom: 60px;
                    opacity: 0;
                    transform: translateY(30px);
                    animation: slideInUp 0.6s ease-out forwards;
                    animation-delay: var(--delay);
                }

                /* Layout for desktop/tablet */
                .item-date {
                    width: 100px;
                    flex-shrink: 0;
                    text-align: right;
                    padding-top: 20px;
                }

                .date-main {
                    display: flex;
                    flex-direction: column;
                    line-height: 1;
                }

                .month {
                    font-size: 0.9rem;
                    font-weight: 800;
                    text-transform: uppercase;
                    color: var(--lime);
                    opacity: 0.8;
                }

                .day {
                    font-size: 2.5rem;
                    font-weight: 700;
                    margin: 5px 0;
                }

                .year {
                    font-size: 0.8rem;
                    font-weight: 600;
                    opacity: 0.4;
                }

                .item-connector {
                    width: 40px;
                    flex-shrink: 0;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    padding-top: 30px;
                }

                .dot {
                    width: 12px;
                    height: 12px;
                    background: var(--lime);
                    border-radius: 50%;
                    box-shadow: 0 0 15px var(--lime);
                    z-index: 2;
                }

                .line {
                    width: 2px;
                    flex-grow: 1;
                    background: linear-gradient(to bottom, rgba(193, 255, 114, 0.4), transparent);
                    margin-top: 10px;
                }

                .item-content {
                    flex-grow: 1;
                }

                .card-glass {
                    background: rgba(255, 255, 255, 0.03);
                    backdrop-filter: blur(15px);
                    border: 1px solid rgba(255, 255, 255, 0.08);
                    border-radius: 32px;
                    padding: 40px;
                    transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
                    position: relative;
                    overflow: hidden;
                }

                .card-glass:hover {
                    background: rgba(255, 255, 255, 0.06);
                    border-color: var(--lime);
                    transform: translateX(10px) scale(1.02);
                }

                .card-header {
                    display: flex;
                    justify-content: space-between;
                    margin-bottom: 24px;
                }

                .cat-tag {
                    font-size: 0.7rem;
                    font-weight: 900;
                    background: rgba(193, 255, 114, 0.1);
                    color: var(--lime);
                    padding: 6px 14px;
                    border-radius: 100px;
                    letter-spacing: 0.05em;
                    text-transform: uppercase;
                }

                .service-title {
                    font-size: 1.8rem;
                    font-weight: 600;
                    margin-bottom: 12px;
                    line-height: 1.2;
                }

                .service-desc {
                    font-size: 1.05rem;
                    opacity: 0.6;
                    line-height: 1.6;
                    margin-bottom: 30px;
                }

                .card-footer {
                    padding-top: 25px;
                    border-top: 1px solid rgba(255, 255, 255, 0.05);
                }

                .visit-btn {
                    display: inline-flex;
                    align-items: center;
                    gap: 12px;
                    color: var(--lime);
                    font-weight: 800;
                    text-decoration: none;
                    font-size: 0.95rem;
                    transition: gap 0.3s ease;
                }

                .visit-btn:hover {
                    gap: 18px;
                }

                .join-global {
                    padding: 0 5% 150px;
                    display: flex;
                    justify-content: center;
                }

                .join-card {
                    background: linear-gradient(45deg, #111, #1a1a1a);
                    padding: 80px 40px;
                    border-radius: 48px;
                    text-align: center;
                    max-width: 800px;
                    width: 100%;
                    border: 1px solid rgba(255, 255, 255, 0.05);
                }

                .join-card h2 {
                    font-size: 2.8rem;
                    margin-bottom: 20px;
                    font-weight: 700;
                }

                .join-card h2 em { color: var(--lime); font-style: italic; font-weight: 400; }
                .join-card p { font-size: 1.2rem; opacity: 0.7; margin-bottom: 40px; }

                .action-pill {
                    display: inline-block;
                    padding: 20px 48px;
                    background: var(--lime);
                    color: var(--text-dark);
                    border-radius: 20px;
                    font-weight: 800;
                    text-decoration: none;
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                }

                .action-pill:hover {
                    transform: scale(1.05);
                    box-shadow: 0 20px 40px rgba(193, 255, 114, 0.2);
                }

                @keyframes fadeInUp {
                    from { opacity: 0; transform: translateY(30px); }
                    to { opacity: 1; transform: translateY(0); }
                }

                @keyframes slideInUp {
                    to { opacity: 1; transform: translateY(0); }
                }

                @media (max-width: 768px) {
                    .timeline-item {
                        flex-direction: column;
                        gap: 20px;
                    }

                    .item-date {
                        width: auto;
                        text-align: left;
                        display: flex;
                        align-items: center;
                        gap: 15px;
                    }

                    .date-main {
                        flex-direction: row;
                        align-items: baseline;
                        gap: 10px;
                    }

                    .item-connector {
                        display: none;
                    }

                    .card-glass {
                        padding: 30px;
                    }

                    .service-title {
                        font-size: 1.4rem;
                    }
                }
            `}</style>
        </div>
    );
}
