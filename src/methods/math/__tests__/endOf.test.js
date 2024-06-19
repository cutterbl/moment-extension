import { expect, test } from 'vitest';
import moment from 'moment';
import { HOURS, DECADE, CENTURY, units } from '../../../defaults';
import decorate from '../../../decorate';

const extended = decorate(moment);

test(`should return the endOf an ${HOURS}`, function () {
  const temp = extended();
  const hour = temp.hour();
  temp.minute(42); // force it to something
  const start = extended(temp).endOf(units[HOURS]);
  expect(start.hour()).toBe(hour);
  expect(start.minute()).toBe(59);
});

test(`should return the endOf an ${DECADE}`, function () {
  const temp = extended();
  temp.year(2022);
  const start = extended(temp).endOf(DECADE);
  expect(start.year()).toBe(2029);
});

test(`should return the endOf an ${CENTURY}`, function () {
  const temp = extended();
  temp.year(2022);
  const start = extended(temp).endOf(CENTURY);
  expect(start.year()).toBe(2099);
});

