import moment from 'moment';
import { HOURS, DECADE, CENTURY, units } from '../../../defaults';
import decorate from '../../../decorate';

const extended = decorate(moment);

describe('neq', function () {
  it(`should return 'true' if 'A' is not equal to 'B'`, function () {
    const A = extended();
    const B = A.clone().add(1, units[HOURS]);
    expect(A.neq(B, units[HOURS])).toBeTruthy();
  });

  it(`should return 'false' if 'A' is equal to 'B'`, function () {
    const A = extended();
    const B = A.clone();
    expect(A.neq(B, units[HOURS])).toBeFalsy();
  });

  it(`should return 'true' if 'A' is not equal to 'B'`, function () {
    const A = extended();
    const B = A.clone().add(1, DECADE);
    expect(A.neq(B, DECADE)).toBeTruthy();
  });

  it(`should return 'false' if 'A' is equal to 'B'`, function () {
    const A = extended();
    const B = A.clone();
    expect(A.neq(B, DECADE)).toBeFalsy();
  });

  it(`should return 'true' if 'A' is not equal to 'B'`, function () {
    const A = extended();
    const B = A.clone().add(1, CENTURY);
    expect(A.neq(B, CENTURY)).toBeTruthy();
  });

  it(`should return 'false' if 'A' is equal to 'B'`, function () {
    const A = extended();
    const B = A.clone();
    expect(A.neq(B, CENTURY)).toBeFalsy();
  });
});
