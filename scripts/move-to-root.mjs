import fs from 'fs';
import path from 'path';

const DIST_DIR = path.join(process.cwd(), 'dist');
const ROOT_DIR = process.cwd();

if (fs.existsSync(DIST_DIR)) {
    const files = fs.readdirSync(DIST_DIR);
    for (const file of files) {
        const src = path.join(DIST_DIR, file);
        const dest = path.join(ROOT_DIR, file);
        if (fs.lstatSync(src).isDirectory()) {
            if (!fs.existsSync(dest)) fs.mkdirSync(dest);
            fs.cpSync(src, dest, { recursive: true });
        } else {
            fs.copyFileSync(src, dest);
        }
    }
    console.log('Build moved to root.');
} else {
    console.error('dist folder not found!');
}
