import moment from 'moment';
import { HOURS, DECADE, CENTURY, units } from '../../../defaults';
import decorate from '../../../decorate';

const extended = decorate(moment);

describe('add', function () {
  it(`should add an ${HOURS}`, function () {
    const temp = extended();
    const hour = temp.hour();
    expect(temp.add(1, units[HOURS]).hour()).toBe(hour + 1);
  });

  it(`should add an ${DECADE}`, function () {
    const temp = extended();
    const year = temp.year();
    expect(temp.add(1, DECADE).year()).toBe(year + 10);
  });

  it(`should add an ${CENTURY}`, function () {
    const temp = extended();
    const year = temp.year();
    expect(temp.add(1, CENTURY).year()).toBe(year + 100);
  });
});
