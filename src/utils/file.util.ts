import fs from 'fs';
import { File } from './file.type';

export const getFiles = (path: string): File[] => {
	const files: File[] = [];
	const foundFiles = fs.readdirSync(path, {
		withFileTypes: true,
	});
	if (!foundFiles.length) {
		return files;
	}
	foundFiles.forEach(item => {
		if (item.isDirectory()) {
			const resArr = getFiles(`${path}/${item.name}`);
			files.push({
				name: item.name,
				isDir: true,
				children: resArr,
			});
		} else {
			files.push({
				name: item.name,
				isDir: false,
				children: []
			});
		}
	});
	return files;
};
