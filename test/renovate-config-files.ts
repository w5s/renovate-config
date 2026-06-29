import fs from 'node:fs';
import path from 'node:path';

const RENOVATE_SCHEMA = 'https://docs.renovatebot.com/renovate-schema.json';

export function findRenovateConfigFiles(
  directory: string,
  files: string[] = [],
): string[] {
  for (const entry of fs.readdirSync(directory)) {
    if (entry === 'node_modules') {
      continue;
    }

    const entryPath = path.join(directory, entry);
    const stats = fs.statSync(entryPath);

    if (stats.isDirectory()) {
      findRenovateConfigFiles(entryPath, files);
      continue;
    }

    if (!entry.endsWith('.json')) {
      continue;
    }

    if (fs.readFileSync(entryPath, 'utf8').includes(RENOVATE_SCHEMA)) {
      files.push(path.relative(process.cwd(), entryPath));
    }
  }

  return files.toSorted((left, right) => left.localeCompare(right));
}
