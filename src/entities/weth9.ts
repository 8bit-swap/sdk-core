import { Token } from './token'

/**
 * Known WETH9 implementation addresses, used in our implementation of Ether#wrapped
 */
export const WETH9: { [chainId: number]: Token } = {
  [101003]: new Token(101003, '0xDce22197228e8Ae74bC9D07539A29Ea9F6DE372a', 18, 'WJUNE', 'Wrapped JUNE'),
}
