import { expect, test } from 'vitest';
import moment from 'moment';
import { DECADE, CENTURY, WEEK, units, DAY, YEAR } from '../../../defaults';
import decorate from '../../../decorate';

const extended = decorate(moment);

test(`should create a 'range' of 'days'`, function () {
  const base = extended();
  const start = base.clone().startOf(units[WEEK]);
  const end = base.clone().endOf(units[WEEK]);
  const range = extended.range({ start, end });
  expect(range[0].eq(start)).toBeTruthy();
  expect(
    range[range.length - 1].eq(end.clone().startOf(units[DAY]))
  ).toBeTruthy();
  expect(range.length).toBe(7);
});

test(`should create a range of 'years' in increments of 10`, function () {
  const base = extended();
  const start = base.clone().startOf(CENTURY);
  const end = base.clone().endOf(CENTURY);
  const range = extended.range({ start, end, unit: units[YEAR], step: 10 });
  expect(range[0].year()).toBe(start.year());
  expect(range[range.length - 1].year()).toBe(end.startOf(DECADE).year());
  expect(range.length).toBe(10);
});

