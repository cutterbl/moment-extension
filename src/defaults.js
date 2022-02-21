export const MILI = 'milliseconds';
export const SECONDS = 'seconds';
export const MINUTES = 'minutes';
export const HOURS = 'hours';
export const DAY = 'day';
export const WEEK = 'week';
export const MONTH = 'month';
export const YEAR = 'year';
export const DECADE = 'decade';
export const CENTURY = 'century';

export const MONTHS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

export const units = {
  [MILI]: 'ms',
  [SECONDS]: 's',
  [MINUTES]: 'm',
  [HOURS]: 'h',
  [DAY]: 'd',
  [WEEK]: 'w',
  [MONTH]: 'M',
  [YEAR]: 'y',
  [DECADE]: 'y',
  [CENTURY]: 'y',
};

export const unitCheck = Object.keys(units);
