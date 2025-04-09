import { WagmiConfig, createConfig, useDisconnect } from 'wagmi'
import { mainnet, polygon } from 'wagmi/chains'
import { http } from 'viem'
import { RainbowKitProvider, getDefaultWallets, darkTheme } from '@rainbow-me/rainbowkit'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

// Define chains
const chains = [mainnet, polygon]

// Get connectors
const { connectors } = getDefaultWallets({
  appName: 'UltronSocial',
  projectId: '3458a5b36023f3c5f426ea9f7267bb3b',
  chains
})

// Create wagmi config
const config = createConfig({
  autoConnect: true,
  connectors,
  chains,
  transports: {
    [mainnet.id]: http(),
    [polygon.id]: http()
  },
  ssr: true
})

// Create query client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 60_000
    }
  }
})

// Create wrapper component
export default function WalletProvider({ children }) {
  return (
    <WagmiConfig config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider
          chains={chains}
          theme={darkTheme({
            accentColor: '#7c3aed',
            accentColorForeground: 'white',
            borderRadius: 'large',
            fontStack: 'system'
          })}
        >
          {children}
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiConfig>
  )
}