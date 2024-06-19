import { expect, test } from 'vitest';
import moment from 'moment';
import { HOURS, DECADE, CENTURY, units } from '../../../defaults';
import decorate from '../../../decorate';

const extended = decorate(moment);

test(`should return 'true' if 'A' isSameOrBefore an 'B'`, function () {
  const A = extended();
  const B = A.clone().add(1, units[HOURS]);
  expect(A.isSameOrBefore(B, HOURS)).toBeTruthy();
  expect(A.lte(B, HOURS)).toBeTruthy();
});

test(`should return 'false' if 'A' is not isSameOrBefore an 'B'`, function () {
  const A = extended();
  const B = A.clone().subtract(1, units[HOURS]);
  expect(A.isSameOrBefore(B, HOURS)).toBeFalsy();
  expect(A.lte(B, HOURS)).toBeFalsy();
});

test(`should return 'true' if 'A' is equal to 'B'`, function () {
  const A = extended();
  const B = A.clone();
  expect(A.isSameOrBefore(B)).toBeTruthy();
  expect(A.lte(B)).toBeTruthy();
});

test(`should return 'true' if 'A' isSameOrBefore an 'B'`, function () {
  const A = extended().year(1999);
  const B = extended().year(2022);
  expect(A.isSameOrBefore(B, DECADE)).toBeTruthy();
  expect(A.lte(B, DECADE)).toBeTruthy();
});

test(`should return 'false' if 'A' is not isSameOrBefore an 'B'`, function () {
  const A = extended().year(2022);
  const B = extended().year(1999);
  expect(A.isSameOrBefore(B, DECADE)).toBeFalsy();
  expect(A.lte(B, DECADE)).toBeFalsy();
});

test(`should return 'true' if 'A' is equal to 'B'`, function () {
  const A = extended();
  const B = extended();
  expect(A.isSameOrBefore(B, DECADE)).toBeTruthy();
  expect(A.lte(B, DECADE)).toBeTruthy();
});

test(`should return 'true' if 'A' isSameOrBefore an 'B'`, function () {
  const A = extended().year(1999);
  const B = extended().year(2022);
  expect(A.isSameOrBefore(B, CENTURY)).toBeTruthy();
  expect(A.lte(B, CENTURY)).toBeTruthy();
});

test(`should return 'false' if 'A' is not isSameOrBefore an 'B'`, function () {
  const A = extended().year(2022);
  const B = extended().year(1999);
  expect(A.isSameOrBefore(B, CENTURY)).toBeFalsy();
  expect(A.lte(B, CENTURY)).toBeFalsy();
});

test(`should return 'true' if 'A' is equal to 'B'`, function () {
  const A = extended();
  const B = extended();
  expect(A.isSameOrBefore(B, CENTURY)).toBeTruthy();
  expect(A.lte(B, CENTURY)).toBeTruthy();
});

