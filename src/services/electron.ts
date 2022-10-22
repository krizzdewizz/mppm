export async function readFile(path: string): Promise<ArrayBuffer> {
  const content: Uint8Array = await (window as any).electronAPI.readFile(path);
  return content.buffer;
}

export async function fileExists(path: string): Promise<boolean> {
  return (window as any).electronAPI.fileExists(path);
}
