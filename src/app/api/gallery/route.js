import { NextResponse } from 'next/server';

export const dynamic = 'force-static';

const STATIC_GALLERY = [
    {
        src: '/gallery/tree-planting.png',
        category: 'Sustainability',
        alt: 'Community Tree Planting Initiative'
    },
    {
        src: '/gallery/solar-panels.png',
        category: 'Renewable Energy',
        alt: 'Modern Solar Installation'
    },
    {
        src: '/gallery/education.png',
        category: 'Education',
        alt: 'Nature-based Learning Workshop'
    },
    {
        src: '/gallery/clean-ocean.png',
        category: 'Conservation',
        alt: 'Coastal Cleanup Program'
    },
    {
        src: '/gallery/community-garden.png',
        category: 'Sustainability',
        alt: 'Urban Community Garden Harvest'
    },
    {
        src: '/gallery/recycling-station.png',
        category: 'Conservation',
        alt: 'Modern Eco-friendly Recycling Station'
    },
    {
        src: '/gallery/wind-energy.png',
        category: 'Renewable Energy',
        alt: 'Wind Farm at Sunset'
    },
    {
        src: '/gallery/upcycling.png',
        category: 'Education',
        alt: 'Creative Upcycling Workshop'
    }
];

export async function GET() {
    try {
        return NextResponse.json(STATIC_GALLERY);
    } catch (error) {
        console.error('Gallery API Error:', error);
        return NextResponse.json({ error: 'Failed to fetch gallery images' }, { status: 500 });
    }
}
