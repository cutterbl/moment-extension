import { MONTHS } from '../../defaults';
/**
 * Builds the 'calendarDays' function to get a list of all 'visible'
 * calendar days of a month.
 * @param {Object} moment
 * @returns {function} ([month: number]) => moment[]
 */
export default function calendarDays(moment) {
  const mClone = moment.fn.clone;
  const mRange = moment.fn.range;
  /**
   * Returns an array of 'moment's representing all of the visible
   * calendar days of a month. Uses the existing 'this', but can
   * override it's 'month' by passing an argument.
   * @param {number} [month = undefined] 0 - 11
   * @return {moment[]}
   */
  return function (month = undefined) {
    const clone = mClone.call(this);
    if (month !== undefined && month !== null && MONTHS.includes(month)) {
      clone.month(month);
    }
    const start = clone.firstVisibleDay();
    const end = clone.lastVisibleDay();
    return mRange.call(this, { start, end });
  };
}
