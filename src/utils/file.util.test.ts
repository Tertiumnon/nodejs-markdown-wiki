import { describe, it, expect, beforeAll, afterAll } from 'bun:test';
import { writeFileSync, mkdirSync, rmSync } from 'node:fs';
import { join } from 'node:path';
import { getFiles } from './file.util';

describe('getFiles', () => {
  const testDir = join(import.meta.dir, '../../.test-temp');

  beforeAll(() => {
    // Create test directory structure
    mkdirSync(testDir, { recursive: true });
    mkdirSync(join(testDir, 'subdir'), { recursive: true });
    writeFileSync(join(testDir, 'file1.md'), '# Test');
    writeFileSync(join(testDir, 'file2.txt'), 'content');
    writeFileSync(join(testDir, 'subdir', 'nested.md'), '# Nested');
  });

  afterAll(() => {
    // Clean up test directory
    rmSync(testDir, { recursive: true, force: true });
  });

  it('should return array of files and directories', () => {
    const files = getFiles(testDir);
    expect(Array.isArray(files)).toBe(true);
  });

  it('should include root level files', () => {
    const files = getFiles(testDir);
    const fileNames = files.map((f) => f.name);
    expect(fileNames).toContain('file1.md');
    expect(fileNames).toContain('file2.txt');
  });

  it('should identify directories correctly', () => {
    const files = getFiles(testDir);
    const subdir = files.find((f) => f.name === 'subdir');
    expect(subdir?.isDir).toBe(true);
    expect(subdir?.children.length).toBeGreaterThan(0);
  });

  it('should identify files correctly', () => {
    const files = getFiles(testDir);
    const file = files.find((f) => f.name === 'file1.md');
    expect(file?.isDir).toBe(false);
    expect(file?.children.length).toBe(0);
  });

  it('should recursively include nested files', () => {
    const files = getFiles(testDir);
    const subdir = files.find((f) => f.name === 'subdir');
    expect(subdir?.children).toBeDefined();
    const nestedFiles = subdir?.children.map((f) => f.name);
    expect(nestedFiles).toContain('nested.md');
  });

  it('should handle empty directories', () => {
    const emptyDir = join(testDir, 'empty');
    mkdirSync(emptyDir, { recursive: true });

    const files = getFiles(emptyDir);
    expect(files.length).toBe(0);

    rmSync(emptyDir, { recursive: true, force: true });
  });
});
