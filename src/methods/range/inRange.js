/**
 * Builds the 'inRange' function to determine if 'this' is
 * within a specific date range
 * @param {Object} moment
 * @returns {function} (start: moment, end: moment) => boolean
 */
export default function inRange(moment) {
  const mClone = moment.fn.clone;
  /**
   * Determines if 'this' is within a specific 'start' and 'end' date
   * @param {moment} start
   * @param {moment} end
   * @return {boolean}
   */
  return function (start, end) {
    if (start.gt(end)) {
      throw Error(`Your 'start' date is after your 'end' date`);
    }
    const curr = mClone.call(this);
    return curr.gte(start) && curr.lte(end);
  };
}
