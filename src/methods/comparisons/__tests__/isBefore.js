import moment from 'moment';
import { HOURS, DECADE, CENTURY, units } from '../../../defaults';
import decorate from '../../../decorate';

const extended = decorate(moment);

describe('isBefore', function () {
  it(`should return 'true' if 'A' isBefore an 'B'`, function () {
    const A = extended();
    const B = A.clone().add(1, units[HOURS]);
    expect(A.isBefore(B, HOURS)).toBeTruthy();
    expect(A.lt(B, HOURS)).toBeTruthy();
  });

  it(`should return 'false' if 'A' is not isBefore an 'B'`, function () {
    const A = extended();
    const B = A.clone().subtract(1, units[HOURS]);
    expect(A.isBefore(B, HOURS)).toBeFalsy();
    expect(A.lt(B, HOURS)).toBeFalsy();
  });

  it(`should return 'false' if 'A' is equal to 'B'`, function () {
    const A = extended();
    const B = A.clone();
    expect(A.isBefore(B)).toBeFalsy();
    expect(A.lt(B)).toBeFalsy();
  });

  it(`should return 'true' if 'A' isBefore an 'B'`, function () {
    const A = extended().year(1999);
    const B = extended().year(2022);
    expect(A.isBefore(B, DECADE)).toBeTruthy();
    expect(A.lt(B, DECADE)).toBeTruthy();
  });

  it(`should return 'false' if 'A' is not isBefore an 'B'`, function () {
    const A = extended().year(2022);
    const B = extended().year(1999);
    expect(A.isBefore(B, DECADE)).toBeFalsy();
    expect(A.lt(B, DECADE)).toBeFalsy();
  });

  it(`should return 'false' if 'A' is equal to 'B'`, function () {
    const A = extended();
    const B = extended();
    expect(A.isBefore(B, DECADE)).toBeFalsy();
    expect(A.lt(B, DECADE)).toBeFalsy();
  });

  it(`should return 'true' if 'A' isBefore an 'B'`, function () {
    const A = extended().year(1999);
    const B = extended().year(2022);
    expect(A.isBefore(B, CENTURY)).toBeTruthy();
    expect(A.lt(B, CENTURY)).toBeTruthy();
  });

  it(`should return 'false' if 'A' is not isBefore an 'B'`, function () {
    const A = extended().year(2022);
    const B = extended().year(1999);
    expect(A.isBefore(B, CENTURY)).toBeFalsy();
    expect(A.lt(B, CENTURY)).toBeFalsy();
  });

  it(`should return 'false' if 'A' is equal to 'B'`, function () {
    const A = extended();
    const B = extended();
    expect(A.isBefore(B, CENTURY)).toBeFalsy();
    expect(A.lt(B, CENTURY)).toBeFalsy();
  });
});
