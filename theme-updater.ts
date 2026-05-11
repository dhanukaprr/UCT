import fs from 'fs';
import path from 'path';

function processFile(filePath: string) {
  let content = fs.readFileSync(filePath, 'utf-8');
  const original = content;
  
  // Color replacements
  content = content.replace(/#1A365D/g, '#0f172a'); // slate-900
  content = content.replace(/#2A4A7F/g, '#0f172a'); // slate-900 (make hover same for structural solid feel, or orange)
  content = content.replace(/#D4AF37/g, '#ea580c'); // orange-600
  content = content.replace(/#C5A028/g, '#c2410c'); // orange-700
  content = content.replace(/#FAF9F6/g, '#f8fafc'); // slate-50
  content = content.replace(/#F9F7F1/g, '#f1f5f9'); // slate-100
  
  // Radius replacements
  content = content.replace(/rounded-\[[^\]]+\]/g, 'rounded-none');
  content = content.replace(/rounded-[a-z0-9]+/g, 'rounded-none');
  
  // Font style replacements
  content = content.replace(/font-serif/g, 'font-black tracking-tighter uppercase');
  content = content.replace(/font-light/g, 'font-medium');

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`Updated ${filePath}`);
  }
}

function walkDirs(dir: string) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      walkDirs(filePath);
    } else if (filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
      processFile(filePath);
    }
  }
}

walkDirs('./src');
