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
    { "src": "/gallery/gallery_20.jpg", "category": "Community", "alt": "National Farmathon 2025 - Youth Engagement" },
    { "src": "/gallery/gallery_21.jpg", "category": "Action", "alt": "National Farmathon 2025 - Soil Testing" },
    { "src": "/gallery/gallery_22.jpg", "category": "Events", "alt": "National Farmathon 2025 - Panel Discussion" },
    { "src": "/gallery/gallery_23.jpg", "category": "Community", "alt": "National Farmathon 2025 - Rural Leadership" },
    { "src": "/gallery/gallery_24.jpg", "category": "Action", "alt": "National Farmathon 2025 - Organic Farming" },
    { "src": "/gallery/gallery_25.jpg", "category": "Events", "alt": "National Farmathon 2025 - Exhibition Booths" },
    { "src": "/gallery/gallery_26.jpg", "category": "Community", "alt": "National Farmathon 2025 - Village Outreach" },
    { "src": "/gallery/gallery_27.jpg", "category": "Action", "alt": "National Farmathon 2025 - Irrigation Tech" },
    { "src": "/gallery/gallery_28.jpg", "category": "Events", "alt": "National Farmathon 2025 - Success Stories" },
    { "src": "/gallery/gallery_30.jpg", "category": "Action", "alt": "National Farmathon 2025 - Crop Observation" },
    { "src": "/gallery/gallery_31.jpg", "category": "Events", "alt": "National Farmathon 2025 - Networking Dinner" },
    { "src": "/gallery/gallery_33.jpg", "category": "Action", "alt": "National Farmathon 2025 - Bio-fertilizer Demo" },
    { "src": "/gallery/gallery_34.jpg", "category": "Events", "alt": "National Farmathon 2025 - Closing Remarks" },
    { "src": "/gallery/gallery_35.jpg", "category": "Community", "alt": "National Farmathon 2025 - Tribal Integration" },
    { "src": "/gallery/gallery_36.jpg", "category": "Action", "alt": "National Farmathon 2025 - Machinery Expo" },
    { "src": "/gallery/gallery_37.jpg", "category": "Events", "alt": "National Farmathon 2025 - Media Coverage" },
    { "src": "/gallery/gallery_38.jpg", "category": "Community", "alt": "National Farmathon 2025 - Local Artisans" },
    { "src": "/gallery/gallery_39.jpg", "category": "Action", "alt": "National Farmathon 2025 - Drone Sprinkler" },
    { "src": "/gallery/gallery_40.jpg", "category": "Events", "alt": "National Farmathon 2025 - Grand Finale" },
    { "src": "/gallery/gallery_43.jpg", "category": "Events", "alt": "National Farmathon 2025 - Partners Meeting" },
    { "src": "/gallery/gallery_44.jpg", "category": "Community", "alt": "National Farmathon 2025 - Rural Education Workshop" },
    { "src": "/gallery/gallery_45.jpg", "category": "Action", "alt": "National Farmathon 2025 - Sustainable Irrigation Demo" },
    { "src": "/gallery/gallery_46.jpg", "category": "Events", "alt": "National Farmathon 2025 - Opening Dinner" },
    { "src": "/gallery/gallery_47.jpg", "category": "Community", "alt": "National Farmathon 2025 - Youth Leaders Forum" },
    { "src": "/gallery/gallery_48.jpg", "category": "Action", "alt": "National Farmathon 2025 - Organic Harvest Celebration" },
    { "src": "/gallery/gallery_49.jpg", "category": "Events", "alt": "National Farmathon 2025 - Media Briefing" },
    { "src": "/gallery/gallery_50.jpg", "category": "Community", "alt": "National Farmathon 2025 - Empowering Local Farmers" }
];

export async function GET() {
    try {
        return NextResponse.json(STATIC_GALLERY);
    } catch (error) {
        console.error('Gallery API Error:', error);
        return NextResponse.json({ error: 'Failed to fetch gallery images' }, { status: 500 });
    }
}
