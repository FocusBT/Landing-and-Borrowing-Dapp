import { TokenList } from 'constants/token'
import { Address } from 'viem'

export const getTokenNameFromAddress = (addr: Address) => {
  const tokenMeta = TokenList.find((e) => e.address === addr)
  return tokenMeta?.name
}

export const getTokenLogoFromAddress = (addr: Address) => {
  // DEBUGGING: Check if TokenList is accessible
  const lowercaseAddr = addr.toLowerCase();
  const tokenMeta = TokenList.find((e) => e.address === lowercaseAddr)
  
  // DEBUGGING: Check if tokenMeta is correctly populated

  return tokenMeta?.logo
}

export const isNative = (addr: Address) => {
  return addr === '0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7'
}

export const getTokenAddressFromName = (tokenName: string) => {
  const tokenMeta = TokenList.find((e) => e.name === tokenName)
  return tokenMeta.address
}

export const getDecimals = (token: Address) => {
  const tokenMeta = TokenList.find((e) => e.address === token)
  return 18
}
