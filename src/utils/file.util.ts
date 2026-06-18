import fs from 'node:fs';
import type { File } from './file.type';

export const getFiles = (path: string): File[] => {
  const files: File[] = [];
  const foundFiles = fs.readdirSync(path, {
    withFileTypes: true
  });
  if (foundFiles.length === 0) {
    return files;
  }
  for (const item of foundFiles) {
    if (item.isDirectory()) {
      const resArr = getFiles(`${path}/${item.name}`);
      files.push({
        name: item.name,
        isDir: true,
        children: resArr
      });
    } else {
      files.push({
        name: item.name,
        isDir: false,
        children: []
      });
    }
  }
  return files;
};
