import { DECADE, YEAR } from '../../defaults';
/**
 * Builds the 'calendarDecade' function to get a list of all years
 * of a specific decade.
 * @param {Object} moment
 * @returns {function} ([year: number]) => moment[]
 */
export default function calendarDecade(moment) {
  const mClone = moment.fn.clone;
  const mRange = moment.range;
  /**
   * Returns an array of 'moment's representing all of the years
   * of a specific decade. Uses the existing 'this', but can
   * override it's 'year' by passing an argument.
   * @param {number} [year = undefined]
   * @return {moment[]}
   */
  return function (year = undefined) {
    const clone = mClone.call(this);
    if (year !== undefined && year !== null) {
      clone.year(year);
    }
    const start = clone.clone().startOf(DECADE);
    const end = start.clone().endOf(DECADE).startOf(YEAR);
    return mRange.call(this, { start, end, unit: YEAR });
  };
}
