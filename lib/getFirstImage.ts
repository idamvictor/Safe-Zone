interface File {
  file: string;
}

export const getFirstImage = (files: File[]): string => {
  return files.length > 0 ? files[0].file : "";
};
