
export const getIdFromURL = (urlString: string): string => {
  const url = URL.parse(urlString)

  if (!url) {
    return urlString;
  }

  const videoId = url.searchParams.get('v');

  return videoId || urlString;
}
