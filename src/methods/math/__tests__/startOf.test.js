import { expect, test } from 'vitest';
import moment from 'moment';
import { HOURS, DECADE, CENTURY, units } from '../../../defaults';
import decorate from '../../../decorate';

const extended = decorate(moment);

test(`should return the startOf an ${HOURS}`, function () {
  const temp = extended();
  const hour = temp.hour();
  temp.minute(42); // force it to something
  const start = extended(temp).startOf(units[HOURS]);
  expect(start.hour()).toBe(hour);
  expect(start.minute()).toBe(0);
});

test(`should return the startOf an ${DECADE}`, function () {
  const temp = extended();
  temp.year(2022);
  const start = extended(temp).startOf(DECADE);
  expect(start.year()).toBe(2020);
});

test(`should return the startOf an ${CENTURY}`, function () {
  const temp = extended();
  temp.year(2022);
  const start = extended(temp).startOf(CENTURY);
  expect(start.year()).toBe(2000);
});

