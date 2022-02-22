import moment from 'moment';
import { WEEK, units, DAY, MONTH } from '../../../defaults';
import decorate from '../../../decorate';

const extended = decorate(moment);

describe('calendarDays', function () {
  const base = extended();

  it(`should create a 'range' of calendar 'days'`, function () {
    const first = base.clone().startOf(units[MONTH]).startOf(units[WEEK]);
    const last = base
      .clone()
      .endOf(units[MONTH])
      .endOf(units[WEEK])
      .startOf(units[DAY]);
    const range = extended.range({ start: first, end: last });
    const calDays = base.calendarDays();
    expect(calDays[0].eq(first)).toBeTruthy();
    expect(calDays[calDays.length - 1].eq(last)).toBeTruthy();
    expect(calDays.length).toBe(range.length);
  });

  it(`should create a 'range' of calendar 'days' for a specific 'month'`, function () {
    const first = base
      .clone()
      .month(3)
      .startOf(units[MONTH])
      .startOf(units[WEEK]);
    const last = base
      .clone()
      .month(3)
      .endOf(units[MONTH])
      .endOf(units[WEEK])
      .startOf(units[DAY]);
    const range = extended.range({ start: first, end: last });
    const calDays = base.calendarDays(3);
    expect(calDays[0].eq(first)).toBeTruthy();
    expect(calDays[calDays.length - 1].eq(last)).toBeTruthy();
    expect(calDays.length).toBe(range.length);
  });
});
