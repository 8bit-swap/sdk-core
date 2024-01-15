import { ChainId, SupportedChainsType } from './chains'

//type AddressMap = { [chainId: number]: string }

type ChainAddresses = {
  factory02Address: string
  swapRouter02Address: string
}

//const DEFAULT_NETWORKS = [ChainId.JUNE_SOCOTRA]

/*function constructSameAddressMap(address: string, additionalNetworks: ChainId[] = []): AddressMap {
  return DEFAULT_NETWORKS.concat(additionalNetworks).reduce<AddressMap>((memo, chainId) => {
    memo[chainId] = address
    return memo
  }, {})
} */


// June Socotra adresses
const JUNE_SOCOTRA_ADDRESSES: ChainAddresses = {
  factory02Address: '0xD1E879Df1B58c02fc39c76a2A5bF5196b3122189',
  swapRouter02Address: '0x025DA3679Aa270625FCCc8119be9696c41792A11'
}


export const CHAIN_TO_ADDRESSES_MAP: Record<SupportedChainsType, ChainAddresses> = {
  [ChainId.JUNE_SOCOTRA]: JUNE_SOCOTRA_ADDRESSES,
}

export const SWAP_ROUTER_02_ADDRESSES = (chainId: SupportedChainsType) => {
    return CHAIN_TO_ADDRESSES_MAP[chainId].swapRouter02Address
}
