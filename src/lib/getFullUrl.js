// only use this when using non nextjs component
// Image & Link
export function getFullURL(url) {
  if (!!url.match(/^\//g)) {
    const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH;
    console.log(BASE_PATH);
    return BASE_PATH + url;
  }
  return url;
}
