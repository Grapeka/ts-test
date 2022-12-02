import { IArray } from "./IArray";

export class ManageArray implements IArray {
  sort(collection: number[]): number[] {
    let temp,
      arr = collection;
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] > arr[j]) {
          temp = arr[i];
          arr[i] = arr[j];
          arr[j] = temp;
        }
      }
    }
    return arr;
  }

  merge(collection_1: number[], collection_2: number[]): number[] {
    return this.sort(collection_1.concat(collection_2));
  }
}
