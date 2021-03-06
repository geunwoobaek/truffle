import { Block as EvmBlock } from "web3-eth";
import { Transaction as EvmTransaction } from "web3-core";

export type EvmBlockType = number | string;
export type NetworkId = Number | String;
export type Block = EvmBlock | any;
export type BlockType = EvmBlockType | any;
export type Transaction = EvmTransaction | any;
export type TxHash = string;
