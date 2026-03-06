import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PUBLIC_DIR = path.join(__dirname, '../public');
const IMAGE_EXTENSIONS = ['.png', '.jpg', '.jpeg'];

async function getFiles(dir) {
    const dirents = await fs.promises.readdir(dir, { withFileTypes: true });
    const files = await Promise.all(dirents.map((dirent) => {
        const res = path.resolve(dir, dirent.name);
        return dirent.isDirectory() ? getFiles(res) : res;
    }));
    return files.flat();
}

async function optimizeImages() {
    console.log('🚀 Iniciando otimização global de imagens...');

    try {
        const allFiles = await getFiles(PUBLIC_DIR);
        const imagesToConvert = allFiles.filter(file =>
            IMAGE_EXTENSIONS.includes(path.extname(file).toLowerCase())
        );

        console.log(`Found ${imagesToConvert.length} images to convert.`);

        for (const file of imagesToConvert) {
            const ext = path.extname(file);
            const output = file.replace(ext, '.webp');

            try {
                // Convert to WebP quality 80 (RichardDev Pattern)
                await sharp(file)
                    .webp({ quality: 80 })
                    .toFile(output);

                // Delete original file
                fs.unlinkSync(file);

                console.log(`✅ Otimizado: ${path.relative(PUBLIC_DIR, file)} -> .webp`);
            } catch (err) {
                console.error(`❌ Erro ao processar ${file}:`, err.message);
            }
        }

        console.log('\n✨ Otimização concluída com sucesso!');
    } catch (err) {
        console.error('💥 Erro fatal no script:', err);
    }
}

optimizeImages();
