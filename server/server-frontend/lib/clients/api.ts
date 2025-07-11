const baseURL = process.env.NEXT_PUBLIC_API_URL;

export const fetcher = async (url: string, options?: RequestInit) => {
  const res = await fetch(`${baseURL}${url}`, options);
  if (!res.ok) throw new Error('API Error');
  return res.json();
};
