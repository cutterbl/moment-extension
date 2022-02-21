import { units, DAY } from '../../defaults';
/**
 * Builds the 'mergeTime' function for merging a specific 'time'
 * with 'this' date
 * @param {Object} moment
 * @returns {function} (moment|string) => moment
 */
export default function mergeTime(moment) {
  const mStartOf = moment.fn.startOf;
  /**
   * Will merge a specific 'time' into the current 'this' date
   * @param {string|moment} time - if string expects 'HH:mm:ss:SSS' format
   * @return {moment}
   */
  return function (time) {
    let tm = time ? moment(time, 'HH:mm:ss:SSS') : moment();
    return mStartOf
      .call(this, units[DAY])
      .hour(tm.hour())
      .minute(tm.minute())
      .second(tm.second())
      .millisecond(tm.millisecond());
  };
}
