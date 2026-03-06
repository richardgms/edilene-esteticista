const fs = require('fs');
const { execSync } = require('child_process');

try {
    const out = execSync('python .agent/skills/router-pro/scripts/search_skills.py "ui-ux premium-design card-typography layout-spacing --mode leve"', { encoding: 'utf16le' });
    const lines = out.split('\n');
    const paths = [];

    for (const line of lines) {
        if (line.trim().startsWith('Path: ')) {
            paths.push(line.split('Path: ')[1].trim());
        }
    }

    fs.writeFileSync('skills_detected_ui.json', JSON.stringify(paths, null, 2), 'utf-8');
} catch (e) {
    console.error(e.message);
}
