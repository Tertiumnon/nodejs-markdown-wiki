export interface File {
  name: string;
  isDir: boolean;
  children: File[];
}
