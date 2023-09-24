const BASE_URL = process.env.NEXT_PUBLIC_STORAGE_HOST_NAME;
const PATH = process.env.NEXT_PUBLIC_STORAGE_PATH_NAME;
const OPTIONS = process.env.NEXT_PUBLIC_ASSETS_OPTIONS;

type TLoaderFile = {
  src: string;
};

const loaderFile = ({ src }: TLoaderFile) => `https://${BASE_URL}${PATH}/${src}.svg?${OPTIONS}`;

export default loaderFile;
