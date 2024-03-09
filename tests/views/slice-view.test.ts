import {
  dataProviderForSliceInBoundsPythonAutoGenerated,
  dataProviderForSliceOutOfBoundsPythonAutoGenerated,
  // @ts-ignore
} from "../fixtures/python-slices";
import { view } from "../../src";

describe.each([
  ...dataProviderForSliceSubviewRead(),
  ...dataProviderForSliceInBoundsPythonAutoGenerated(),
  ...dataProviderForSliceOutOfBoundsPythonAutoGenerated(),
] as Array<[Array<number>, string, Array<number>]>)(
  "Array View Slice Subview Read Test",
  (
    source: Array<number>,
    config: string,
    expected: Array<number>,
  ) => {
    it("", () => {
      // Given
      const v = view(source);
      const subview = v.subview(config);

      expect(subview.toArray()).toEqual(expected);
      expect(subview.length).toEqual(expected.length);

      for (let i = 0; i < subview.length; i++) {
        expect(subview.loc[i]).toBe(expected[i]);
      }

      for (let i = 0; i < v.length; i++) {
        expect(v.loc[i]).toBe(source[i]);
      }

      // And then
      expect(v.toArray()).toEqual(source);
      expect(subview.toArray()).toEqual(expected);

      expect([...v]).toEqual(source);
      expect([...subview]).toEqual(expected);
    });
  },
);

describe.each([
  ...dataProviderForSliceSubviewRead(),
  ...dataProviderForSliceInBoundsPythonAutoGenerated(),
  ...dataProviderForSliceOutOfBoundsPythonAutoGenerated(),
] as Array<[Array<number>, string, Array<number>]>)(
  "Array View Slice Subview Loc Read Test",
  (
    source: Array<number>,
    config: string,
    expected: Array<number>,
  ) => {
    it("", () => {
      // Given
      const v = view(source);
      const slicedArray = v.loc[config];

      expect(slicedArray).toEqual(expected);
      expect(slicedArray.length).toEqual(expected.length);

      for (let i = 0; i < slicedArray.length; i++) {
        expect(slicedArray[i]).toBe(expected[i]);
      }

      for (let i = 0; i < v.length; i++) {
        expect(v.loc[i]).toBe(source[i]);
      }

      // And then
      expect(v.toArray()).toEqual(source);
      expect(slicedArray).toEqual(expected);
    });
  },
);

function dataProviderForSliceSubviewRead(): Array<unknown> {
  return [
    [[1, 2, 3, 4, 5, 6, 7, 8, 9], '1:6', [2, 3, 4, 5, 6]],
    [[1, 2, 3, 4, 5, 6, 7, 8, 9], '1:6:1', [2, 3, 4, 5, 6]],
    [[1, 2, 3, 4, 5, 6, 7, 8, 9], '1:6:2', [2, 4, 6]],
    [[1, 2, 3, 4, 5, 6, 7, 8, 9], '2:8', [3, 4, 5, 6, 7, 8]],
    [[1, 2, 3, 4, 5, 6, 7, 8, 9], '2:8:1', [3, 4, 5, 6, 7, 8]],
    [[1, 2, 3, 4, 5, 6, 7, 8, 9], '2:8:2', [3, 5, 7]],

    [[1, 2, 3, 4, 5, 6, 7, 8, 9], '-1::-1', [9, 8, 7, 6, 5, 4, 3, 2, 1]],
    [[1, 2, 3, 4, 5, 6, 7, 8, 9], '-1:0:-1', [9, 8, 7, 6, 5, 4, 3, 2]],

    [[1, 2, 3, 4, 5, 6, 7, 8, 9], '0:9:1', [1, 2, 3, 4, 5, 6, 7, 8, 9]],
    [[1, 2, 3, 4, 5, 6, 7, 8, 9], '0:9:2', [1, 3, 5, 7, 9]],
    [[1, 2, 3, 4, 5, 6, 7, 8, 9], '1:9:2', [2, 4, 6, 8]],
    [[1, 2, 3, 4, 5, 6, 7, 8, 9], '0:10:1', [1, 2, 3, 4, 5, 6, 7, 8, 9]],
    [[1, 2, 3, 4, 5, 6, 7, 8, 9], '0:10:2', [1, 3, 5, 7, 9]],
    [[1, 2, 3, 4, 5, 6, 7, 8, 9], '-9:9:1', [1, 2, 3, 4, 5, 6, 7, 8, 9]],
    [[1, 2, 3, 4, 5, 6, 7, 8, 9], '-9:9:2', [1, 3, 5, 7, 9]],
    [[1, 2, 3, 4, 5, 6, 7, 8, 9], '-10:10:1', [1, 2, 3, 4, 5, 6, 7, 8, 9]],
    [[1, 2, 3, 4, 5, 6, 7, 8, 9], '-10:10:2', [1, 3, 5, 7, 9]],
    [[1, 2, 3, 4, 5, 6, 7, 8, 9], '-5:10:1', [5, 6, 7, 8, 9]],
    [[1, 2, 3, 4, 5, 6, 7, 8, 9], '-5:100:2', [5, 7, 9]],

    [[], '0:', []],
    [[], '0:0', []],
    [[], '0:0:1', []],
    [[], '1:-1', []],
    [[], '-1:-1', []],
    [[], '-2:-1', []],
    [[], '-2,:-1: 2', []],
    [[], '-1:0:-1', []],
    [[1], '0:', [1]],
    [[1], '0:1', [1]],
    [[1], '0:1:1', [1]],
    [[1], '0:1:2', [1]],
    [[1], '0:-1', []],
    [[1], '0:-1:1', []],
    [[1], '0:-1:2', []],
    [[1], '0:10:100', [1]],
    [[1], '1:10:100', []],
    [[1], '0:', [1]],
    [[1, 2, 3], '0:0:1', []],
    [[1], '1:', []],
    [[1, 2], '1:0', []],
    [[1, 2], '1::-1', [2, 1]],
    [[1, 2], '0:1', [1]],
    [[1, 2], '1:1', []],
    [[1, 2, 3, 4, 5, 6, 7, 8, 9], '1::2', [2, 4, 6, 8]],
    [[1, 2, 3, 4, 5, 6, 7, 8, 9], '::2', [1, 3, 5, 7, 9]],
  ];
}

describe.each([
  ...dataProviderForSliceSubviewWrite(),
] as Array<[Array<number>, string, Array<number>, Array<number>]>)(
  "Array View Slice Subview Loc Write Test",
  (
    source: Array<number>,
    config: string,
    toWrite: Array<number>,
    expected: Array<number>,
  ) => {
    it("", () => {
      // Given
      const v = view(source);

      // When
      v.loc[config] = toWrite;

      // And then
      expect(v.toArray()).toEqual(expected);
      expect(source).toEqual(expected);
    });
  },
);

function dataProviderForSliceSubviewWrite(): Array<unknown> {
  return [
    [[], ':', [], []],
    [[1], ':', [11], [11]],
    [[1, 2, 3], ':', [2, 4, 6], [2, 4, 6]],
    [[1, 2, 3], '0:', [2, 4, 6], [2, 4, 6]],
    [[1, 2, 3], ':3', [2, 4, 6], [2, 4, 6]],
    [[1, 2, 3], '0:3', [2, 4, 6], [2, 4, 6]],
    [[1, 2, 3], '1:', [22, 33], [1, 22, 33]],
    [[1, 2, 3], ':2', [11, 22], [11, 22, 3]],
    [[1, 2, 3], ':-1', [11, 22], [11, 22, 3]],
    [[1, 2, 3, 4, 5, 6], '::2', [77, 88, 99], [77, 2, 88, 4, 99, 6]],
    [[1, 2, 3, 4, 5, 6], '::-2', [77, 88, 99], [1, 99, 3, 88, 5, 77]],
    [[1, 2, 3, 4, 5, 6], '1::2', [77, 88, 99], [1, 77, 3, 88, 5, 99]],
    [[1, 2, 3, 4, 5, 6], '-2::-2', [77, 88, 99], [99, 2, 88, 4, 77, 6]],
    [[1, 2, 3, 4, 5, 6, 7, 8], ':-2:2', [77, 88, 99], [77, 2, 88, 4, 99, 6, 7, 8]],
    [[1, 2, 3, 4, 5, 6, 7, 8], ':6:2', [77, 88, 99], [77, 2, 88, 4, 99, 6, 7, 8]],
    [[1, 2, 3, 4, 5, 6, 7, 8], '1:-1:2', [77, 88, 99], [1, 77, 3, 88, 5, 99, 7, 8]],
  ];
}
