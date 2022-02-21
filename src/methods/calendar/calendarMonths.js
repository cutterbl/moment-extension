import { units, YEAR, MONTH } from '../../defaults';
/**
 * Builds the 'calendarMonths' function to get a list of all of the
 * months associated with a specific year
 * @param {Object} moment
 * @returns {function} ([year: number]) => moment[]
 */
export default function calendarMonths(moment) {
  const mClone = moment.fn.clone;
  const mRange = moment.fn.range;
  /**
   * Returns an array of 'moment's representing all of the months
   * associated with a specific year. Uses the existing 'this', but can
   * override it's 'year' by passing an argument.
   * @param {number} [year = undefined]
   * @return {moment[]}
   */
  return function (year = undefined) {
    const clone = mClone.call(this);
    if (year !== undefined && year !== null && typeof year === 'number') {
      clone.year(year);
    }
    const start = clone.clone().startOf(units[YEAR]);
    const end = clone.clone().endOf(units[YEAR]);
    return mRange.call(this, { start, end, unit: units[MONTH] });
  };
}
