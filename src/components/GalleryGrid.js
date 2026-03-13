'use client';

import { useState, useEffect } from 'react';
import { TreeLoader } from './TreeLoader';

export default function GalleryGrid() {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [filter, setFilter] = useState('All');

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const res = await fetch('/api/gallery');
                if (!res.ok) throw new Error('Failed to fetch gallery images');
                const data = await res.json();
                setImages(Array.isArray(data) ? data : []);
            } catch (err) {
                console.error('Gallery fetch error:', err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchImages();
    }, []);

    const categories = ['All', ...new Set(images.map(img => img.category))];

    const filteredImages = filter === 'All'
        ? images
        : images.filter(img => img.category === filter);

    if (loading) {
        return (
            <div className="gallery-status">
                <TreeLoader size={80} />
                <p className="loading-text">Curating our impact journey...</p>
                <style jsx>{`
                    .gallery-status {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        padding: 120px 20px;
                        color: var(--text);
                        text-align: center;
                        animation: fadeIn 0.5s ease-out;
                    }
                    .loading-text {
                        margin-top: 30px;
                        font-family: var(--font-outfit);
                        font-weight: 600;
                        letter-spacing: 0.02em;
                        opacity: 0.8;
                    }
                    @keyframes fadeIn {
                        from { opacity: 0; transform: translateY(10px); }
                        to { opacity: 1; transform: translateY(0); }
                    }
                `}</style>
            </div>
        );
    }

    if (error) {
        return (
            <div className="gallery-status">
                <p className="error-msg">Failed to load media: {error}</p>
                <button onClick={() => window.location.reload()} className="retry-btn">Retry</button>
                <style jsx>{`
                    .gallery-status { padding: 80px; text-align: center; }
                    .error-msg { color: #ff6b6b; margin-bottom: 20px; font-weight: 600; }
                    .retry-btn { 
                        padding: 10px 20px; 
                        background: var(--lime); 
                        color: var(--text-dark); 
                        border-radius: 8px; 
                        font-weight: 800;
                    }
                `}</style>
            </div>
        );
    }

    return (
        <>
            <div className="gallery-filter-bar">
                {categories.map(cat => (
                    <button
                        key={cat}
                        className={`filter-pill ${filter === cat ? 'active' : ''}`}
                        onClick={() => setFilter(cat)}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            <section className="gallery-section">
                <div className="gallery-grid">
                    {filteredImages.length > 0 ? (
                        filteredImages.map((img, i) => (
                            <div key={i} className="gallery-item">
                                <div className="image-wrapper">
                                    <img src={img.src} alt={img.alt} loading="lazy" />
                                    <div className="item-overlay">
                                        <div className="overlay-content">
                                            <span className="item-cat">{img.category}</span>
                                            <p className="item-title">{img.alt}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="no-images">No images found in this category.</p>
                    )}
                </div>
            </section>

            <style jsx>{`
                .gallery-filter-bar {
                    display: flex;
                    justify-content: center;
                    gap: 12px;
                    padding: 40px 20px;
                    flex-wrap: wrap;
                }
                .filter-pill {
                    padding: 10px 24px;
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    background: rgba(255, 255, 255, 0.05);
                    color: var(--text);
                    border-radius: 100px;
                    font-family: var(--font-outfit);
                    font-weight: 500;
                    cursor: pointer;
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                    backdrop-filter: blur(10px);
                }
                .filter-pill:hover {
                    background: rgba(255, 255, 255, 0.1);
                    transform: translateY(-2px);
                }
                .filter-pill.active {
                    background: var(--lime);
                    color: var(--text-dark);
                    border-color: var(--lime);
                    font-weight: 700;
                    box-shadow: 0 10px 20px rgba(193, 255, 114, 0.2);
                }
                
                .gallery-section {
                    padding: 0 5% 100px;
                    max-width: 1600px;
                    margin: 0 auto;
                }
                .gallery-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
                    gap: 30px;
                }
                .gallery-item {
                    border-radius: 24px;
                    overflow: hidden;
                    aspect-ratio: 1;
                    position: relative;
                    background: #1a1a1a;
                    animation: cardAppear 0.6s ease-out backwards;
                }
                .gallery-item:nth-child(even) {
                    animation-delay: 0.1s;
                }
                .gallery-item:nth-child(3n) {
                    animation-delay: 0.2s;
                }

                .image-wrapper {
                    width: 100%;
                    height: 100%;
                    position: relative;
                    overflow: hidden;
                }
                .image-wrapper img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
                }
                .gallery-item:hover img {
                    transform: scale(1.1);
                }

                .item-overlay {
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 60%);
                    display: flex;
                    align-items: flex-end;
                    padding: 30px;
                    opacity: 0;
                    transition: opacity 0.4s ease;
                }
                .gallery-item:hover .item-overlay {
                    opacity: 1;
                }

                .overlay-content {
                    transform: translateY(20px);
                    transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                }
                .gallery-item:hover .overlay-content {
                    transform: translateY(0);
                }

                .item-cat {
                    font-family: var(--font-outfit);
                    font-weight: 700;
                    font-size: 0.8rem;
                    text-transform: uppercase;
                    letter-spacing: 0.1em;
                    color: var(--lime);
                    margin-bottom: 8px;
                    display: block;
                }
                .item-title {
                    font-size: 1.2rem;
                    font-weight: 600;
                    line-height: 1.3;
                    color: white;
                }

                .no-images {
                    grid-column: 1 / -1;
                    text-align: center;
                    padding: 100px;
                    font-size: 1.2rem;
                    opacity: 0.5;
                }

                @keyframes cardAppear {
                    from { opacity: 0; transform: translateY(30px) scale(0.95); }
                    to { opacity: 1; transform: translateY(0) scale(1); }
                }

                @media (max-width: 768px) {
                    .gallery-grid {
                        grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
                        gap: 15px;
                    }
                    .gallery-filter-bar {
                        padding: 30px 10px;
                    }
                    .item-title {
                        font-size: 1rem;
                    }
                }
            `}</style>
        </>
    );
}
