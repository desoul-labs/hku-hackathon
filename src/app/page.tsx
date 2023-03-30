"use client";

import { Inter } from 'next/font/google'
import styles from './page.module.css'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import '@rainbow-me/rainbowkit/styles.css';
import {
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { WagmiConfig } from 'wagmi';
import LensSignInButton from '@/components/LensSignInButton';
import { chains, wagmiClient } from '@/config/wagmi';
import { LensProvider } from '@lens-protocol/react-web';
import { lensConfig } from '@/config/lens';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
      <WagmiConfig client={wagmiClient}>
        <RainbowKitProvider chains={chains}>
          <LensProvider config={lensConfig}>
            <ConnectButton />
            <LensSignInButton />
          </LensProvider>
        </RainbowKitProvider>
      </WagmiConfig>
    </main>
  )
}
