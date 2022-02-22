import moment from 'moment';
import { HOURS, DECADE, CENTURY, units } from '../../../defaults';
import decorate from '../../../decorate';

const extended = decorate(moment);

describe('startOf', function () {
  it(`should return the startOf an ${HOURS}`, function () {
    const temp = extended();
    const hour = temp.hour();
    temp.minute(42); // force it to something
    const start = extended(temp).startOf(units[HOURS]);
    expect(start.hour()).toBe(hour);
    expect(start.minute()).toBe(0);
  });

  it(`should return the startOf an ${DECADE}`, function () {
    const temp = extended();
    temp.year(2022);
    const start = extended(temp).startOf(DECADE);
    expect(start.year()).toBe(2020);
  });

  it(`should return the startOf an ${CENTURY}`, function () {
    const temp = extended();
    temp.year(2022);
    const start = extended(temp).startOf(CENTURY);
    expect(start.year()).toBe(2000);
  });
});
