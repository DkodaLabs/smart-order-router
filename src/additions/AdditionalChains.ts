
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
    multicallAddress: '0x74eFC66BA88553d23c673Ec20E85B778Ff0d11b6',
    quoterAddress: '0x821eE201E8EB79c8b5141989A72B020621890966',
    nonfungiblePositionManagerAddress: '0x46Eb7Cff688ea0defCB75056ca209d7A2039fDa8',
    tickLensAddress: '0x355528990642B27472188dc32177c3208e587165',
    swapRouter02Address: '0xE4690BD7A9cFc681A209443BCE31aB943F9a9459',
  }
}
