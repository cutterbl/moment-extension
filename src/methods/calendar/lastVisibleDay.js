import { units, MONTH, WEEK } from '../../defaults';
/**
 * Builds the 'lastVisibleDay' function to get the last 'calendar'
 * day of a month.
 * @param {Object} moment
 * @returns {function} () => moment
 */
export default function lastVisibleDay(moment) {
  const mClone = moment.fn.clone;
  /**
   * Returns a 'moment' representing the last 'calendar' day
   * of the month of 'this'
   * @return {moment}
   */
  return function () {
    return mClone.call(this).endOf(units[MONTH]).endOf(units[WEEK]);
  };
}
