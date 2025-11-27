
export const getIdFromURL = (urlString: string): string => {
  let url: URL;
  
  try {
    url = new URL(urlString);
  } catch {
    // ignore
  }

  if (!url) {
    return urlString;
  }

  const videoId = url.searchParams.get('v');

  return videoId || urlString;
}
