import { NextResponse } from 'next/server';

export const dynamic = 'force-static';

const STATIC_GALLERY = [
    { "src": "/gallery/gallery_1.jpg", "category": "Events", "alt": "National Farmathon 2025 - Inauguration Ceremony" },
    { "src": "/gallery/gallery_2.jpg", "category": "Events", "alt": "National Farmathon 2025 - Flag Off" },
    { "src": "/gallery/gallery_3.jpg", "category": "Community", "alt": "National Farmathon 2025 - Farmer Interaction" },
    { "src": "/gallery/gallery_4.jpg", "category": "Action", "alt": "National Farmathon 2025 - Field Demonstration" },
    { "src": "/gallery/gallery_5.jpg", "category": "Events", "alt": "National Farmathon 2025 - Community Gathering" },
    { "src": "/gallery/gallery_6.jpg", "category": "Action", "alt": "National Farmathon 2025 - Sustainable Farming" },
    { "src": "/gallery/gallery_7.jpg", "category": "Community", "alt": "National Farmathon 2025 - Rural Impact" },
    { "src": "/gallery/gallery_8.jpg", "category": "Events", "alt": "National Farmathon 2025 - Participant Registration" }
];

export async function GET() {
    try {
        return NextResponse.json(STATIC_GALLERY);
    } catch (error) {
        console.error('Gallery API Error:', error);
        return NextResponse.json({ error: 'Failed to fetch gallery images' }, { status: 500 });
    }
}
