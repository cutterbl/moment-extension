import { expect, test } from 'vitest';
import moment from 'moment';
import { units, YEAR, MONTH } from '../../../defaults';
import decorate from '../../../decorate';

const extended = decorate(moment);

const base = extended();

test(`should create a 'range' of calendar 'months'`, function () {
  const first = base.clone().startOf(units[YEAR]);
  const last = base.clone().endOf(units[YEAR]).startOf(units[MONTH]);
  const range = extended.range({
    start: first,
    end: last,
    unit: units[MONTH],
  });
  const calMonths = base.calendarMonths();
  expect(calMonths[0].eq(first, units[YEAR])).toBeTruthy();
  expect(calMonths[0].eq(first, units[MONTH])).toBeTruthy();
  expect(calMonths[calMonths.length - 1].eq(last, units[YEAR])).toBeTruthy();
  expect(calMonths[calMonths.length - 1].eq(last, units[MONTH])).toBeTruthy();
  expect(calMonths.length).toBe(range.length);
});

test(`should create a 'range' of calendar 'months' for a specific 'year'`, function () {
  const first = base.clone().year(1987).startOf(units[YEAR]);
  const last = base
    .clone()
    .year(1987)
    .endOf(units[YEAR])
    .startOf(units[MONTH]);
  const range = extended.range({
    start: first,
    end: last,
    unit: units[MONTH],
  });
  const calMonths = base.calendarMonths(1987);
  expect(calMonths[0].eq(first, units[YEAR])).toBeTruthy();
  expect(calMonths[0].eq(first, units[MONTH])).toBeTruthy();
  expect(calMonths[calMonths.length - 1].eq(last, units[YEAR])).toBeTruthy();
  expect(calMonths[calMonths.length - 1].eq(last, units[MONTH])).toBeTruthy();
  expect(calMonths.length).toBe(range.length);
});

