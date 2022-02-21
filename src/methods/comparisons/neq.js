/**
 * Builds the 'neq()' function
 * @param {Object} moment
 * @returns {function} (value: number, [unit: string]) => boolean
 */
export default function neq(moment) {
  const mClone = moment.fn.clone;
  /**
   * determines if 'this' is not equal to a passed value
   * @param {number} value - the 'value' for comparison against
   * @param {string} [unit = undefined] - to compare against a specific unit of measurement
   * @returns {boolean}
   */
  return function (value, unit = undefined) {
    return !mClone.call(this).isSame(value, unit);
  };
}
