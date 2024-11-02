declare global {
  interface Array<T> {
    insertAtIndex(index: number, element: T): Array<T>;
    getByWrappedIndex(index: number): T;
    includesAll(arr: Array<T>): boolean;
    includesAny(arr: Array<T>): boolean;
    randomize(): Array<T>;
    last(): T;
  }

  interface ArrayConstructor {
    ofLength(length: number, value?: any): Array<any>;
    randomize(arr: Array<any>): Array<any>;
    empty(length: number): Array<any>;
  }

  interface String {
    hash64(seed: number): string;
    words(): Array<string>;
  }

  interface StringConstructor {
    hash64(str: string, seed: number): string;
    words(str: string): Array<string>;
  }

  interface Math {
    clamp(min: number, preferredValue: number, max: number): number;
    mapRange(
      value: number,
      fromLow: number,
      fromHigh: number,
      toLow: number,
      toHigh: number
    ): number;
    invertPercentage(percentage: number, limit: number): number;
    randomInRange(min: number, max: number): number;
    falsyNotZero(value: any): boolean;
  }
}
// Add randomize as a static method to Array

export {};
