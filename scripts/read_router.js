const fs = require('fs');

try {
    const raw = fs.readFileSync('router_output.log');
    // It's UTF-16LE, Node's "utf16le" encoding reading
    const content = Buffer.from(raw).toString('utf16le');

    const lines = content.split('\n');
    const paths = [];

    for (const line of lines) {
        if (line.trim().startsWith('Path: ')) {
            paths.push(line.split('Path: ')[1].trim());
        }
    }

    fs.writeFileSync('skills_detected.json', JSON.stringify(paths, null, 2), 'utf-8');
} catch (e) { }
