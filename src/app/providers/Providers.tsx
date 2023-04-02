"use client";

import { lensConfig } from "@/config/lens";
import { chains, wagmiClient } from "@/config/wagmi";
import { LensProvider } from "@lens-protocol/react-web";
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import "@rainbow-me/rainbowkit/styles.css";
import { PropsWithChildren } from "react";
import { WagmiConfig } from "wagmi";
import ReduxProvider from "./ReduxProvider";

type P = PropsWithChildren;

export default function Providers({ children }: P) {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}>
        <LensProvider config={lensConfig}>
          <ReduxProvider>{children}</ReduxProvider>
        </LensProvider>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}
