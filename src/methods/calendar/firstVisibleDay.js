import { units, MONTH, WEEK } from '../../defaults';
/**
 * Builds the 'firstVisibleDay' function to get the first 'calendar'
 * day of a month.
 * @param {Object} moment
 * @returns {function} () => moment
 */
export default function firstVisibleDay(moment) {
  const mClone = moment.fn.clone;
  /**
   * Returns a 'moment' representing the first 'calendar' day
   * of the month of 'this'
   * @return {moment}
   */
  return function () {
    return mClone.call(this).startOf(units[MONTH]).startOf(units[WEEK]);
  };
}
