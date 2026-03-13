import fs from 'fs';
import path from 'path';
import * as cheerio from 'cheerio';

const DATA_DIR = path.join(process.cwd(), 'src/data');
const SCRAPE_HEADERS = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
};

if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });

async function run() {
    // Gallery (National Farmathon 2025 - Expanded)
    const gallery = [
        { "src": "/gallery/gallery_1.jpg", "category": "Events", "alt": "National Farmathon 2025 - Inauguration Ceremony" },
        { "src": "/gallery/gallery_2.jpg", "category": "Events", "alt": "National Farmathon 2025 - Flag Off" },
        { "src": "/gallery/gallery_3.jpg", "category": "Community", "alt": "National Farmathon 2025 - Farmer Interaction" },
        { "src": "/gallery/gallery_4.jpg", "category": "Action", "alt": "National Farmathon 2025 - Field Demonstration" },
        { "src": "/gallery/gallery_5.jpg", "category": "Events", "alt": "National Farmathon 2025 - Community Gathering" },
        { "src": "/gallery/gallery_6.jpg", "category": "Action", "alt": "National Farmathon 2025 - Sustainable Farming" },
        { "src": "/gallery/gallery_7.jpg", "category": "Community", "alt": "National Farmathon 2025 - Rural Impact" },
        { "src": "/gallery/gallery_8.jpg", "category": "Events", "alt": "National Farmathon 2025 - Participant Registration" },
        { "src": "/gallery/gallery_9.jpg", "category": "Action", "alt": "National Farmathon 2025 - Agricultural Innovation" },
        { "src": "/gallery/gallery_10.jpg", "category": "Events", "alt": "National Farmathon 2025 - Keynote Session" },
        { "src": "/gallery/gallery_11.jpg", "category": "Community", "alt": "National Farmathon 2025 - Farmer Workshop" },
        { "src": "/gallery/gallery_12.jpg", "category": "Action", "alt": "National Farmathon 2025 - Modern Equipment" },
        { "src": "/gallery/gallery_13.jpg", "category": "Events", "alt": "National Farmathon 2025 - Award Ceremony" },
        { "src": "/gallery/gallery_14.jpg", "category": "Community", "alt": "National Farmathon 2025 - Knowledge Sharing" },
        { "src": "/gallery/gallery_15.jpg", "category": "Action", "alt": "National Farmathon 2025 - Seed Distribution" },
        { "src": "/gallery/gallery_16.jpg", "category": "Events", "alt": "National Farmathon 2025 - Cultural Program" },
        { "src": "/gallery/gallery_17.jpg", "category": "Community", "alt": "National Farmathon 2025 - Empowering Women" },
        { "src": "/gallery/gallery_18.jpg", "category": "Action", "alt": "National Farmathon 2025 - Digital Literacy" },
        { "src": "/gallery/gallery_19.jpg", "category": "Events", "alt": "National Farmathon 2025 - Press Interaction" },
        { "src": "/gallery/gallery_20.jpg", "category": "Community", "alt": "National Farmathon 2025 - Youth Engagement" }
    ];
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

    // Programs (2025 Calendar)
    const programs = [
        {
          "title": "Education as a Service (EaaS)",
          "date": "Jan 24, 2025",
          "category": "Education",
          "link": "https://run4education.com/",
          "description": "Training 40K students and creating 40K jobs through solution-driven education programs."
        },
        {
          "title": "Livelihood as a Service (LaaS)",
          "date": "Feb 12, 2025",
          "category": "Livelihood",
          "link": "https://run4livelihoods.com/",
          "description": "Empowering communities with sustainable skills and livelihood opportunities."
        },
        {
          "title": "Water as a Service (WaaS)",
          "date": "Mar 22, 2025",
          "category": "Sustainability",
          "link": "https://runforwater.in/",
          "description": "Ensuring clean water access and implementing conservation practices globally."
        },
        {
          "title": "Health as a Service (HaaS)",
          "date": "Apr 07, 2025",
          "category": "Health",
          "link": "https://runforhealth.in/",
          "description": "Promoting accessible healthcare and wellness initiatives for rural communities."
        },
        {
          "title": "Entertainment as a Service (EaaS)",
          "date": "May 11, 2025",
          "category": "Culture",
          "link": "http://run4culture.com/",
          "description": "Celebrating cultural diversity and community engagement through the arts."
        },
        {
          "title": "Environmental as a Service (EaaS)",
          "date": "Jun 05, 2025",
          "category": "Conservation",
          "link": "https://run4environment.com/",
          "description": "Driving environmental protection and restoration through collective action."
        },
        {
          "title": "Housing as a Service (HaaS)",
          "date": "Jul 17, 2025",
          "category": "Sustainability",
          "link": "https://runforgreenhousing.org/",
          "description": "Developing eco-friendly housing solutions for sustainable community living."
        },
        {
          "title": "Hub Networking Events (HnEaaS)",
          "date": "Aug 19, 2025",
          "category": "Networking",
          "link": "https://giveambassadorsnetwork.org/",
          "description": "Connecting global ambassadors and change-makers for humanitarian impact."
        },
        {
          "title": "Transport as a Service (TaaS)",
          "date": "Sep 20, 2025",
          "category": "Mobility",
          "link": "https://run4emobilitytransport.com/",
          "description": "Pioneering sustainable and inclusive transport solutions for last-mile connectivity."
        },
        {
          "title": "Energy as a Service (EaaS)",
          "date": "Oct 22, 2025",
          "category": "Energy",
          "link": "https://run4greenenergy.org/",
          "description": "Transitioning communities to clean, renewable energy sources for a greener future."
        },
        {
          "title": "Agriculture as a Service (AaaS)",
          "date": "Dec 23, 2025",
          "category": "Agriculture",
          "link": "https://nationalfarmathon.com/",
          "description": "Modernizing agricultural practices to ensure food security and farmer prosperity."
        }
    ];
    fs.writeFileSync(path.join(DATA_DIR, 'programs.json'), JSON.stringify(programs, null, 2));

    console.log('Static data generated.');
}
run();
