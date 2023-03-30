"use client";

import { Inter } from 'next/font/google'
import styles from './page.module.css'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import '@rainbow-me/rainbowkit/styles.css';

import {
  getDefaultWallets,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { configureChains, createClient, WagmiConfig } from 'wagmi';
import { mainnet, polygon, optimism, arbitrum } from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';
import {
  SignInWithLens, Theme, Size
} from '@lens-protocol/widgets-react'
import SignInButton from '@/components/SignInButton';

const inter = Inter({ subsets: ['latin'] })

const { chains, provider } = configureChains(
  [mainnet, polygon, optimism, arbitrum],
  [
    publicProvider()
  ]
);

const { connectors } = getDefaultWallets({
  appName: 'My RainbowKit App',
  chains
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider
})

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <WagmiConfig client={wagmiClient}>
          <RainbowKitProvider chains={chains}>
            <ConnectButton />
            <SignInButton />
          </RainbowKitProvider>
        </WagmiConfig>
      </div>
    </main>
  )
}
