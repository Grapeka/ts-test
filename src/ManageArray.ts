import { IArray } from "./merge";

export class ManageArray implements IArray {
  merge(collection_1: number[], collection_2: number[]): number[] {
    return collection_1.concat(collection_2);
  }
}
