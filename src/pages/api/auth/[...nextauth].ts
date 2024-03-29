import { authOptions } from '@/lib/auth';
import { NextApiRequest, NextApiResponse } from 'next';
import NextAuth from 'next-auth';

export default async function auth(req: NextApiRequest, res: NextApiResponse) {
  if (!Array.isArray(req.query.nextauth)) {
    res.status(400).send('Bad request');
    return;
  }

  const isDefaultSigninPage = req.method === 'GET' && req.query.nextauth.find((value) => value === 'signin');

  // Hide Sign-In with Ethereum from default sign page
  if (isDefaultSigninPage) {
    authOptions.providers.pop();
  }

  return await NextAuth(req, res, authOptions);
}
