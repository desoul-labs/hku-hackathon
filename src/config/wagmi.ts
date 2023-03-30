import { getDefaultWallets } from "@rainbow-me/rainbowkit"
import { configureChains, createClient } from "wagmi"
import { polygon } from "wagmi/chains"
import { publicProvider } from "wagmi/providers/public"

export const { chains, provider, webSocketProvider } = configureChains(
  [polygon],
  [
    publicProvider(),
  ]
)

const { connectors } = getDefaultWallets({
  appName: 'My RainbowKit App',
  chains
})

export const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
  webSocketProvider,
})