import moment from 'moment';
import { HOURS, DECADE, CENTURY, units } from '../../../defaults';
import decorate from '../../../decorate';

const extended = decorate(moment);

describe('isAfter', function () {
  it(`should return 'true' if 'A' isAfter an 'B'`, function () {
    const A = extended();
    const B = A.clone().subtract(1, units[HOURS]);
    expect(A.isAfter(B, HOURS)).toBeTruthy();
    expect(A.gt(B, HOURS)).toBeTruthy();
  });

  it(`should return 'false' if 'A' is not isAfter an 'B'`, function () {
    const A = extended();
    const B = A.clone().add(1, units[HOURS]);
    expect(A.isAfter(B, HOURS)).toBeFalsy();
    expect(A.gt(B, HOURS)).toBeFalsy();
  });

  it(`should return 'false' if 'A' is equal to 'B'`, function () {
    const A = extended();
    const B = A.clone();
    expect(A.isAfter(B)).toBeFalsy();
    expect(A.gt(B)).toBeFalsy();
  });

  it(`should return 'true' if 'A' isAfter an 'B'`, function () {
    const A = extended().year(2022);
    const B = extended().year(1999);
    expect(A.isAfter(B, DECADE)).toBeTruthy();
    expect(A.gt(B, DECADE)).toBeTruthy();
  });

  it(`should return 'false' if 'A' is not isAfter an 'B'`, function () {
    const A = extended().year(1999);
    const B = extended().year(2022);
    expect(A.isAfter(B, DECADE)).toBeFalsy();
    expect(A.gt(B, DECADE)).toBeFalsy();
  });

  it(`should return 'false' if 'A' is equal to 'B'`, function () {
    const A = extended();
    const B = extended();
    expect(A.isAfter(B, DECADE)).toBeFalsy();
    expect(A.gt(B, DECADE)).toBeFalsy();
  });

  it(`should return 'true' if 'A' isAfter an 'B'`, function () {
    const A = extended().year(2022);
    const B = extended().year(1999);
    expect(A.isAfter(B, CENTURY)).toBeTruthy();
    expect(A.gt(B, CENTURY)).toBeTruthy();
  });

  it(`should return 'false' if 'A' is not isAfter an 'B'`, function () {
    const A = extended().year(1999);
    const B = extended().year(2022);
    expect(A.isAfter(B, CENTURY)).toBeFalsy();
    expect(A.gt(B, CENTURY)).toBeFalsy();
  });

  it(`should return 'false' if 'A' is equal to 'B'`, function () {
    const A = extended();
    const B = extended();
    expect(A.isAfter(B, CENTURY)).toBeFalsy();
    expect(A.gt(B, CENTURY)).toBeFalsy();
  });
});
