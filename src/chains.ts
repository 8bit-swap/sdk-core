export enum ChainId {
  JUNE_SOCOTRA = 101003
}

export const SUPPORTED_CHAINS = [
  ChainId.JUNE_SOCOTRA,
] as const
export type SupportedChainsType = typeof SUPPORTED_CHAINS[number]

export enum NativeCurrencyName {
  // Strings match input for CLI
  JUNE = 'JUNE',
}
