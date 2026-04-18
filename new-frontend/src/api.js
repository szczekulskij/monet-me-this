const BASE = '/api';

export async function fetchImageBlob(endpoint) {
  const res = await fetch(`${BASE}${endpoint}`);
  if (!res.ok) throw new Error(`Failed to fetch ${endpoint}`);
  const blob = await res.blob();
  return URL.createObjectURL(blob);
}

export async function generateMonet(file) {
  const data = new FormData();
  data.append('image', file);
  const res = await fetch(`${BASE}/generate/image/monet`, {
    method: 'POST',
    body: data,
  });
  if (!res.ok) throw new Error('Generation failed');
  const blob = await res.blob();
  return URL.createObjectURL(blob);
}
