import { NextResponse } from 'next/server';

export const dynamic = 'force-static';

const STATIC_GALLERY = [
    {
        src: '/gallery/tree-planting.png',
        category: 'Sustainability',
        alt: 'Diverse community members planting trees in a sunny field'
    },
    {
        src: '/gallery/solar-panels.png',
        category: 'Renewable Energy',
        alt: 'Modern solar panels on a community building roof'
    },
    {
        src: '/gallery/education.png',
        category: 'Education',
        alt: 'Teacher showing children how to care for plants in nature'
    },
    {
        src: '/gallery/clean-ocean.png',
        category: 'Conservation',
        alt: 'Serene clean ocean beach with volunteers'
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
