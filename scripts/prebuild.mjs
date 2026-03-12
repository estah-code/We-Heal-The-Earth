import fs from 'fs';
import path from 'path';
import * as cheerio from 'cheerio';

// Native fetch is available in modern Node.js

const DATA_DIR = path.join(process.cwd(), 'src/data');

if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
}

const SCRAPE_HEADERS = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
};

async function scrapeGallery() {
    console.log('Scraping Gallery...');
    try {
        const response = await fetch('https://wehealtheearth.com/media/', { headers: SCRAPE_HEADERS });
        const html = await response.text();
        const $ = cheerio.load(html);
        const mediaItems = [];

        $('.elementor-widget-image img, .elementor-image-gallery img, .elementor-widget-theme-post-content img').each((i, el) => {
            const $img = $(el);
            const $link = $img.closest('a');
            const src = $link.attr('href') || $img.attr('src') || $img.attr('data-src');
            const alt = $img.attr('alt') || 'We Heal The Earth Media';

            if (src && src.includes('wp-content/uploads') && !src.includes('logo')) {
                const absoluteSrc = src.startsWith('http') ? src : `https://wehealtheearth.com${src}`;
                mediaItems.push({ src: absoluteSrc, category: 'Media', alt });
            }
        });

        const uniqueItems = Array.from(new Set(mediaItems.map(m => m.src)))
            .map(src => mediaItems.find(m => m.src === src));

        fs.writeFileSync(path.join(DATA_DIR, 'gallery.json'), JSON.stringify(uniqueItems, null, 2));
        console.log(`Saved ${uniqueItems.length} gallery items.`);
    } catch (err) {
        console.error('Gallery scraping failed:', err);
    }
}

async function scrapeBlogs() {
    console.log('Scraping Blogs...');
    try {
        const response = await fetch('https://wehealtheearth.com/blogs/', { headers: SCRAPE_HEADERS });
        const html = await response.text();
        const $ = cheerio.load(html);
        const blogs = [];

        $('.elementskit-post-card').each((i, el) => {
            const title = $(el).find('.entry-title a').text().trim();
            const link = $(el).find('.entry-title a').attr('href');
            const excerpt = $(el).find('.elementskit-post-body p').text().trim();

            if (title && link) {
                blogs.push({
                    title,
                    link,
                    excerpt: excerpt || 'No description available.',
                    id: i
                });
            }
        });

        fs.writeFileSync(path.join(DATA_DIR, 'blogs.json'), JSON.stringify(blogs, null, 2));
        console.log(`Saved ${blogs.length} blog items.`);
    } catch (err) {
        console.error('Blogs scraping failed:', err);
    }
}

async function scrapePrograms() {
    console.log('Scraping Programs...');
    try {
        const response = await fetch('https://wehealtheearth.com/planet-run/', { headers: SCRAPE_HEADERS });
        const html = await response.text();
        const $ = cheerio.load(html);
        const programs = [];

        $('.event-card').each((i, el) => {
            const container = $(el);
            const title = container.find('.event-title').text().trim();
            const month = container.find('.month-badge').text().trim();
            const date = container.find('.event-date').text().trim();
            const cause = container.find('.special-day').text().trim();
            const description = container.find('.description').text().trim();
            const link = container.find('.event-cta').attr('href');

            if (title && link) {
                programs.push({
                    id: i,
                    title,
                    link,
                    date: date || month,
                    description: description || 'Join our movement for environmental impact.',
                    category: cause || 'Planet Run'
                });
            }
        });

        const uniquePrograms = Array.from(new Set(programs.map(p => p.title)))
            .map(title => programs.find(p => p.title === title))
            .slice(0, 12);

        fs.writeFileSync(path.join(DATA_DIR, 'programs.json'), JSON.stringify(uniquePrograms, null, 2));
        console.log(`Saved ${uniquePrograms.length} programs.`);
    } catch (err) {
        console.error('Programs scraping failed:', err);
    }
}

async function run() {
    await scrapeGallery();
    await scrapeBlogs();
    await scrapePrograms();
}

run();
