import moment from 'moment';
import { DECADE, units, YEAR } from '../../../defaults';
import decorate from '../../../decorate';

const extended = decorate(moment);

describe('calendarDecade', function () {
  const base = extended();

  it(`should create a 'range' of a calendar 'decade'`, function () {
    const first = base.clone().startOf(DECADE);
    const last = base.clone().endOf(DECADE).startOf(YEAR);
    const range = extended.range({ start: first, end: last, unit: YEAR });
    const calDecade = base.calendarDecade();
    expect(calDecade[0].eq(first, units[YEAR])).toBeTruthy();
    expect(calDecade[calDecade.length - 1].eq(last, units[YEAR])).toBeTruthy();
    expect(calDecade.length).toBe(range.length);
  });

  it(`should create a 'range' of a calendar 'decade' for a specific 'year'`, function () {
    const first = base.clone().year(1987).startOf(DECADE);
    const last = base.clone().year(1987).endOf(DECADE).startOf(YEAR);
    const range = extended.range({ start: first, end: last, unit: YEAR });
    const calDecade = base.calendarDecade(1987);
    expect(calDecade[0].eq(first, units[YEAR])).toBeTruthy();
    expect(calDecade[calDecade.length - 1].eq(last, units[YEAR])).toBeTruthy();
    expect(calDecade.length).toBe(range.length);
  });
});
