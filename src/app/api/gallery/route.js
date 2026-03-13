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

export async function GET() {
    try {
        return NextResponse.json(STATIC_GALLERY);
    } catch (error) {
        console.error('Gallery API Error:', error);
        return NextResponse.json({ error: 'Failed to fetch gallery images' }, { status: 500 });
    }
}
