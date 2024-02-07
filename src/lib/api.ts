const API_URL = process.env.API_URL;

export async function signin(id: string) {
  const res = await fetch(`${API_URL}/api/v1/auth`, {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      sub: id,
    }),
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}
