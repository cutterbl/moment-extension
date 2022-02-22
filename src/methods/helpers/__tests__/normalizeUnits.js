import moment from 'moment';
import { MILI, DECADE, CENTURY } from '../../../defaults';
import decorate from '../../../decorate';

const extended = decorate(moment);

describe('normalizeUnits', function () {
  it(`should normalize ${MILI}`, function () {
    expect(extended.normalizeUnits(MILI)).toBe('millisecond');
  });

  it(`should normalize ${DECADE}`, function () {
    expect(extended.normalizeUnits(DECADE)).toBe(DECADE);
  });

  it(`should normalize ${CENTURY}`, function () {
    expect(extended.normalizeUnits(CENTURY)).toBe(CENTURY);
  });
});
