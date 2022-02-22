import moment from 'moment';
import { HOURS, DECADE, CENTURY, units } from '../../../defaults';
import decorate from '../../../decorate';

const extended = decorate(moment);

describe('subtract', function () {
  it(`should subtract an ${HOURS}`, function () {
    const temp = extended();
    const hour = temp.hour();
    expect(temp.subtract(1, units[HOURS]).hour()).toBe(hour - 1);
  });

  it(`should subtract an ${DECADE}`, function () {
    const temp = extended();
    const year = temp.year();
    expect(temp.subtract(1, DECADE).year()).toBe(year - 10);
  });

  it(`should subtract an ${CENTURY}`, function () {
    const temp = extended();
    const year = temp.year();
    expect(temp.subtract(1, CENTURY).year()).toBe(year - 100);
  });
});
