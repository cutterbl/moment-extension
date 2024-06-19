import { expect, test } from 'vitest';
import moment from 'moment';
import { MILI, DECADE, CENTURY } from '../../../defaults';
import decorate from '../../../decorate';

const extended = decorate(moment);

test(`should normalize ${MILI}`, function () {
  expect(extended.normalizeUnits(MILI)).toBe('millisecond');
});

test(`should normalize ${DECADE}`, function () {
  expect(extended.normalizeUnits(DECADE)).toBe(DECADE);
});

test(`should normalize ${CENTURY}`, function () {
  expect(extended.normalizeUnits(CENTURY)).toBe(CENTURY);
});

