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
  factory02Address: '0x0D5eCAacDfD2BA156d2a70e31A3A9586fF6868c9',
  swapRouter02Address: '0x41645CE5D1bC1e6997A1e6f4d8A580102C162062'
}


export const CHAIN_TO_ADDRESSES_MAP: Record<SupportedChainsType, ChainAddresses> = {
  [ChainId.JUNE_SOCOTRA]: JUNE_SOCOTRA_ADDRESSES,
}

export const SWAP_ROUTER_02_ADDRESSES = (chainId: SupportedChainsType) => {
    return CHAIN_TO_ADDRESSES_MAP[chainId].swapRouter02Address
}
