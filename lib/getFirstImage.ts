interface File {
  file: string;
}

const staticImage =
  "https://res.cloudinary.com/dyp8gtllq/image/upload/v1737075746/samples/ecommerce/leather-bag-gray.jpg";

export const getFirstImage = (files: File[]): string => {
  return files.length > 0 ? files[0].file : staticImage;
};
