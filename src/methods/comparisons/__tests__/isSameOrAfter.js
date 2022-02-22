import moment from 'moment';
import { HOURS, DECADE, CENTURY, units } from '../../../defaults';
import decorate from '../../../decorate';

const extended = decorate(moment);

describe('isSameOrAfter', function () {
  it(`should return 'true' if 'A' isSameOrAfter an 'B'`, function () {
    const A = extended();
    const B = A.clone().subtract(1, units[HOURS]);
    expect(A.isSameOrAfter(B, HOURS)).toBeTruthy();
    expect(A.gte(B, HOURS)).toBeTruthy();
  });

  it(`should return 'false' if 'A' is not isSameOrAfter an 'B'`, function () {
    const A = extended();
    const B = A.clone().add(1, units[HOURS]);
    expect(A.isSameOrAfter(B, HOURS)).toBeFalsy();
    expect(A.gte(B, HOURS)).toBeFalsy();
  });

  it(`should return 'true' if 'A' is equal to 'B'`, function () {
    const A = extended();
    const B = A.clone();
    expect(A.isSameOrAfter(B, HOURS)).toBeTruthy();
    expect(A.gte(B, HOURS)).toBeTruthy();
  });

  it(`should return 'true' if 'A' isSameOrAfter an 'B'`, function () {
    const A = extended().year(2022);
    const B = extended().year(1999);
    expect(A.isSameOrAfter(B, DECADE)).toBeTruthy();
    expect(A.gte(B, DECADE)).toBeTruthy();
  });

  it(`should return 'false' if 'A' is not isSameOrAfter an 'B'`, function () {
    const A = extended().year(1999);
    const B = extended().year(2022);
    expect(A.isSameOrAfter(B, DECADE)).toBeFalsy();
    expect(A.gte(B, DECADE)).toBeFalsy();
  });

  it(`should return 'true' if 'A' is equal to 'B'`, function () {
    const A = extended();
    const B = extended();
    expect(A.isSameOrAfter(B, DECADE)).toBeTruthy();
    expect(A.gte(B, DECADE)).toBeTruthy();
  });

  it(`should return 'true' if 'A' isSameOrAfter an 'B'`, function () {
    const A = extended().year(2022);
    const B = extended().year(1999);
    expect(A.isSameOrAfter(B, CENTURY)).toBeTruthy();
    expect(A.gte(B, CENTURY)).toBeTruthy();
  });

  it(`should return 'false' if 'A' is not isSameOrAfter an 'B'`, function () {
    const A = extended().year(1999);
    const B = extended().year(2022);
    expect(A.isSameOrAfter(B, CENTURY)).toBeFalsy();
    expect(A.gte(B, CENTURY)).toBeFalsy();
  });

  it(`should return 'true' if 'A' is equal to 'B'`, function () {
    const A = extended();
    const B = extended();
    expect(A.isSameOrAfter(B, CENTURY)).toBeTruthy();
    expect(A.gte(B, CENTURY)).toBeTruthy();
  });
});
