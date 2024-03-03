
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
  BLAST_SEPOLIA = 168587773,
  BLAST = 81457
}

export const AdditionChainToAddresses: { [chainId in AdditionalChainIds]: ChainAddresses } = {
  [AdditionalChainIds.BLAST_SEPOLIA]: {
    v3CoreFactoryAddress: '0xe832c58505D5BFECE4053B49f0c64Fb4c0a9AaD7',
    multicallAddress: '0x74eFC66BA88553d23c673Ec20E85B778Ff0d11b6',
    quoterAddress: '0x821eE201E8EB79c8b5141989A72B020621890966',
    nonfungiblePositionManagerAddress: '0x46Eb7Cff688ea0defCB75056ca209d7A2039fDa8',
    tickLensAddress: '0x355528990642B27472188dc32177c3208e587165',
    swapRouter02Address: '0xE4690BD7A9cFc681A209443BCE31aB943F9a9459',
  },
  [AdditionalChainIds.BLAST]: {
    v3CoreFactoryAddress: '0x71b08f13B3c3aF35aAdEb3949AFEb1ded1016127',
    multicallAddress: '0x2024C59EE713dB918c9ba0Cb84C5e2C6c6f834C5',
    quoterAddress: '0x3b299f65b47c0bfAEFf715Bc73077ba7A0a685bE',
    nonfungiblePositionManagerAddress: '0x434575EaEa081b735C985FA9bf63CD7b87e227F9',
    tickLensAddress: '0x796B39328b92472b2Bd950AEB20D950611e02EF6',
    swapRouter02Address: '0x337827814155ECBf24D20231fCA4444F530C0555',
  }
}
