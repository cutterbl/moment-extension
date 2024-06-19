import { expect, test } from 'vitest';
import moment from 'moment';
import { HOURS, DECADE, CENTURY, units } from '../../../defaults';
import decorate from '../../../decorate';

const extended = decorate(moment);

test(`should add an ${HOURS}`, function () {
  const temp = extended();
  const hour = temp.hour();
  expect(temp.add(1, units[HOURS]).hour()).toBe(hour + 1);
});

test(`should add an ${DECADE}`, function () {
  const temp = extended();
  const year = temp.year();
  expect(temp.add(1, DECADE).year()).toBe(year + 10);
});

test(`should add an ${CENTURY}`, function () {
  const temp = extended();
  const year = temp.year();
  expect(temp.add(1, CENTURY).year()).toBe(year + 100);
});

