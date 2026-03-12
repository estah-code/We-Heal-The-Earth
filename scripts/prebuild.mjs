import fs from 'fs';
import path from 'path';
import * as cheerio from 'cheerio';

const DATA_DIR = path.join(process.cwd(), 'src/data');
const SCRAPE_HEADERS = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
};

if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });

async function run() {
    // Gallery
    let gallery = [];
    try {
        const resp = await fetch('https://wehealtheearth.com/media/', { headers: SCRAPE_HEADERS });
        if (resp.ok) {
            const $ = cheerio.load(await resp.text());
            $('.elementor-widget-image img').each((i, el) => {
                const src = $(el).attr('src');
                if (src && src.includes('wp-content/uploads')) gallery.push({ src, category: 'Media', alt: 'Eco Impact' });
            });
        }
    } catch (e) {}
    if (gallery.length === 0) gallery = [{ src: 'https://wehealtheearth.com/wp-content/uploads/2024/03/gallery1.jpg', category: 'Events', alt: 'Community' }];
    fs.writeFileSync(path.join(DATA_DIR, 'gallery.json'), JSON.stringify(gallery, null, 2));

    // Blogs
    let blogs = [];
    try {
        const resp = await fetch('https://wehealtheearth.com/blogs/', { headers: SCRAPE_HEADERS });
        if (resp.ok) {
            const $ = cheerio.load(await resp.text());
            $('.elementskit-post-card').each((i, el) => {
                const title = $(el).find('.entry-title a').text().trim();
                if (title) blogs.push({ title, link: '#', excerpt: 'Read more about our movement.', id: i });
            });
        }
    } catch (e) {}
    if (blogs.length === 0) blogs = [{ title: 'Healing the Earth 2024', link: '#', excerpt: 'Our vision for a greener future.', id: 0 }];
    fs.writeFileSync(path.join(DATA_DIR, 'blogs.json'), JSON.stringify(blogs, null, 2));

    // Programs
    let programs = [];
    try {
        const resp = await fetch('https://wehealtheearth.com/planet-run/', { headers: SCRAPE_HEADERS });
        if (resp.ok) {
            const $ = cheerio.load(await resp.text());
            $('.event-card').each((i, el) => {
                const title = $(el).find('.event-title').text().trim();
                if (title) programs.push({ id: i, title, link: '#', date: '22 MAR', description: 'Planet Run event.', category: 'Run' });
            });
        }
    } catch (e) {}
    if (programs.length === 0) programs = [{ id: 0, title: 'Planet Run: Hyderabad', link: '#', date: '22 MAR', description: 'Join the run.', category: 'Sustainability' }];
    fs.writeFileSync(path.join(DATA_DIR, 'programs.json'), JSON.stringify(programs, null, 2));

    console.log('Static data generated.');
}
run();
