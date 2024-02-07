import { NextAuthOptions, RequestInternal } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { getCsrfToken } from 'next-auth/react';
import { SiweMessage } from 'siwe';
// import { signin } from './api';

const NEXTAUTH_URL = process.env.NEXTAUTH_URL;
const NEXTAUTH_SECRET = process.env.NEXTAUTH_SECRET;

export const authOptions: NextAuthOptions = {
  callbacks: {
    async session({ session, token }) {
      session.user = {
        name: token.sub,
      };
      return session;
    },
  },
  providers: [
    CredentialsProvider({
      name: 'Ethereum',
      credentials: {
        message: {
          label: 'Message',
          placeholder: '0x0',
          type: 'text',
        },
        signature: {
          label: 'Signature',
          placeholder: '0x0',
          type: 'text',
        },
      },
      authorize: async (
        credentials: Record<'message' | 'signature', string> | undefined,
        req: Pick<RequestInternal, 'headers' | 'method' | 'body' | 'query'>,
      ) => {
        try {
          const siwe = new SiweMessage(JSON.parse(credentials?.message || '{}'));

          if (!NEXTAUTH_URL) {
            return null;
          }

          const nextAuthHost = new URL(NEXTAUTH_URL).host;

          if (siwe.domain !== nextAuthHost) {
            return null;
          }

          const nonce = await getCsrfToken({ req: { headers: req.headers } });

          if (siwe.nonce !== nonce) {
            return null;
          }

          await siwe.verify({ signature: credentials?.signature || '' });

          // const k = await signin(siwe.address);
          // console.log('[authorize][1]', k);

          return {
            id: siwe.address,
          };
        } catch (e) {
          console.log('errrrrror from [...nextauth.ts]', e);
          return null;
        }
      },
    }),
  ],
  secret: NEXTAUTH_SECRET,
  session: {
    strategy: 'jwt',
  },
};
