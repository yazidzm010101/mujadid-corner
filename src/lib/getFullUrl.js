// only use this when using non nextjs component

import { useRouter } from "next/router";

// Image & Link
export function getFullURL(url) {
  const router = useRouter();
  const getLink = (path) => `${router.basePath}${path}`;
  if (!!url.match(/^\//g)) {
    return getLink(url);
  }
  return url;
}
