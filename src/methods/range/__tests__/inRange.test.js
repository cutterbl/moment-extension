import { expect, test } from 'vitest';
import moment from 'moment';
import { DECADE, CENTURY, WEEK, units, DAY, YEAR } from '../../../defaults';
import decorate from '../../../decorate';

const extended = decorate(moment);

const base = extended();
const start = base.clone().startOf(units[WEEK]);
const end = base.clone().endOf(units[WEEK]);
const before = base.clone().subtract(1, units[YEAR]);
const after = base.clone().add(1, units[YEAR]);

test(`${base.format('LL LT')} is 'inRange' of a start of ${start.format(
  'LL LT'
)} and an end of ${end.format('LL LT')}`, function () {
  expect(base.inRange(start, end)).toBeTruthy();
});

test(`${before.format('LL LT')} is not 'inRange' of a start of ${start.format(
  'LL LT'
)} and an end of ${end.format('LL LT')}`, function () {
  expect(before.inRange(start, end)).toBeFalsy();
});

test(`${after.format('LL LT')} is not 'inRange' of a start of ${start.format(
  'LL LT'
)} and an end of ${end.format('LL LT')}`, function () {
  expect(after.inRange(start, end)).toBeFalsy();
});

test(`should throw an error if your 'start' is after your 'end'`, function () {
  expect(() => base.inRange(end, start)).toThrow(
    `Your 'start' date is after your 'end' date`
  );
});

