
declare type ChainAddresses = {
  v3CoreFactoryAddress: string;
  multicallAddress: string;
  quoterAddress: string;
  v3MigratorAddress?: string;
  nonfungiblePositionManagerAddress?: string;
  tickLensAddress?: string;
  swapRouter02Address?: string;
  v1MixedRouteQuoterAddress?: string;
};

export enum AdditionalChainIds {
  BLAST_SEPOLIA = 168587773
}

export const AdditionChainToAddresses: { [chainId in AdditionalChainIds]: ChainAddresses } = {
  [AdditionalChainIds.BLAST_SEPOLIA]: {
    v3CoreFactoryAddress: '0xe832c58505D5BFECE4053B49f0c64Fb4c0a9AaD7',
    multicallAddress: '0xE4690BD7A9cFc681A209443BCE31aB943F9a9459',
    quoterAddress: '0xE4690BD7A9cFc681A209443BCE31aB943F9a9459',
    nonfungiblePositionManagerAddress: '0x46Eb7Cff688ea0defCB75056ca209d7A2039fDa8',
    tickLensAddress: '0x66650a23E6F09eaD2B0f47874A5e793E14324881',
    swapRouter02Address: '0xc47d832aC7486E05E1Fdf8945009F12ab0654Eb7',
  }
}
