import moment from 'moment';
import { HOURS, DECADE, CENTURY, units } from '../../../defaults';
import decorate from '../../../decorate';

const extended = decorate(moment);

describe('isSame', function () {
  it(`should return 'true' if 'A' is equal to 'B'`, function () {
    const A = extended();
    const B = A.clone();
    expect(A.isSame(B, units[HOURS])).toBeTruthy();
    expect(A.eq(B, units[HOURS])).toBeTruthy();
  });

  it(`should return 'false' if 'A' is not equal to 'B'`, function () {
    const A = extended();
    const B = A.clone().add(1, units[HOURS]);
    expect(A.isSame(B, units[HOURS])).toBeFalsy();
    expect(A.eq(B, units[HOURS])).toBeFalsy();
  });

  it(`should return 'true' if 'A' is equal to 'B'`, function () {
    const A = extended();
    const B = A.clone();
    expect(A.isSame(B, DECADE)).toBeTruthy();
    expect(A.eq(B, DECADE)).toBeTruthy();
  });

  it(`should return 'false' if 'A' is not equal to 'B'`, function () {
    const A = extended();
    const B = A.clone().subtract(1, DECADE);
    expect(A.isSame(B, DECADE)).toBeFalsy();
    expect(A.eq(B, DECADE)).toBeFalsy();
  });

  it(`should return 'true' if 'A' is equal to 'B'`, function () {
    const A = extended();
    const B = A.clone();
    expect(A.isSame(B, CENTURY)).toBeTruthy();
    expect(A.eq(B, CENTURY)).toBeTruthy();
  });

  it(`should return 'false' if 'A' is not equal to 'B'`, function () {
    const A = extended();
    const B = A.clone().subtract(1, CENTURY);
    expect(A.isSame(B, CENTURY)).toBeFalsy();
    expect(A.eq(B, CENTURY)).toBeFalsy();
  });
});
