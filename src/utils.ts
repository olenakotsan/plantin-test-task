export const getImageSrc = (url: string): string => {
    return process.env.PUBLIC_URL + url;
}