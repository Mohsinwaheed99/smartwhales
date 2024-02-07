'use client';

import React from 'react';
import { SessionProvider } from 'next-auth/react';
import type { Session } from 'next-auth';
import { connectorsForWallets, darkTheme, getDefaultWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import { mainnet, polygon, optimism, arbitrum, zora, goerli } from 'wagmi/chains';
import { metaMaskWallet } from '@rainbow-me/rainbowkit/wallets';
import { publicProvider } from 'wagmi/providers/public';
import { GetSiweMessageOptions, RainbowKitSiweNextAuthProvider } from '@rainbow-me/rainbowkit-siwe-next-auth';

import '@rainbow-me/rainbowkit/styles.css';

interface AuthContextProps {
  children: React.ReactNode;
  session: Session | null;
}

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [mainnet, polygon, optimism, arbitrum, zora, ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === 'true' ? [goerli] : [])],
  [publicProvider()],
);

const projectId = process.env.NEXT_PUBLIC_WALLET_CONNECT_ID || '';

const appInfo = {
  appName: 'Rainbowkit Demo',
};

const { wallets } = getDefaultWallets({
  appName: 'My RainbowKit App',
  projectId,
  chains,
});

const connectors = connectorsForWallets([
  ...wallets,
  {
    groupName: 'Other',
    wallets: [metaMaskWallet({ projectId, chains })],
  },
]);

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
  webSocketPublicClient,
});

const getSiweMessageOptions: GetSiweMessageOptions = () => ({
  statement: 'Sign in to the RainbowKit + SIWE example app',
});

const WalletProvider: React.FC<AuthContextProps> = ({ children, session }: AuthContextProps) => {
  return (
    <SessionProvider refetchInterval={0} session={session}>
      <WagmiConfig config={wagmiConfig}>
        <RainbowKitSiweNextAuthProvider getSiweMessageOptions={getSiweMessageOptions}>
          <RainbowKitProvider appInfo={appInfo} chains={chains} showRecentTransactions={true} theme={darkTheme()}>
            {children}
          </RainbowKitProvider>
        </RainbowKitSiweNextAuthProvider>
      </WagmiConfig>
    </SessionProvider>
  );
};

export default WalletProvider;
