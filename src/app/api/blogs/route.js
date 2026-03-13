import { NextResponse } from 'next/server';
import * as cheerio from 'cheerio';

export const dynamic = 'force-static';

export async function GET(request) {
    let targetUrl = null;
    try {
        if (request && request.url) {
            const { searchParams } = new URL(request.url);
            targetUrl = searchParams.get('url');
        }
    } catch (e) {
        // Handle build-time or invalid URL cases
    }

    try {
        if (targetUrl) {
            const response = await fetch(targetUrl, {
                next: { revalidate: 3600 },
                headers: {
                    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
                }
            });

            if (!response.ok) throw new Error('Failed to fetch blog content');
            const html = await response.text();
            const $ = cheerio.load(html);
            const title = $('h1.entry-title').text().trim();
            const featuredImage = $('.post-thumbnail img').attr('src') || $('.elementor-image img').first().attr('src');
            const contentObj = $('.entry-content.single-content');
            contentObj.find('script, style, ins, .sharedaddy, .wpcnt').remove();

            contentObj.find('a').each((i, el) => {
                const href = $(el).attr('href');
                if (href && !href.startsWith('http')) {
                    $(el).attr('href', `https://wehealtheearth.com${href}`);
                }
                $(el).attr('target', '_blank');
            });

            return NextResponse.json({
                title,
                featuredImage,
                content: contentObj.html(),
            });
        }

        const response = await fetch('https://wehealtheearth.com/blogs/', {
            next: { revalidate: 3600 },
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
            }
        });

        if (!response.ok) throw new Error('Failed to fetch blogs');
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

        return NextResponse.json(blogs);
    } catch (error) {
        console.error('Blog scraper error:', error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
