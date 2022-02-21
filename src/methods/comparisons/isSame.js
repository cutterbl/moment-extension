import unitIsDecadeOrCentury from '../helpers/unitIsDecadeOrCentury';
import getDecadeOrCentury from '../helpers/getDecadeOrCentury';
/**
 * Builds the 'isSame' override function
 * Also aliased as 'eq()'
 * @param {Object} moment
 * @returns {function} (value: number, [unit: string]) => boolean
 */
export default function isSame(moment) {
  const mClone = moment.fn.clone;
  const mIsSame = moment.fn.isSame;
  /**
   * Extends moment native 'isSame' to support 'decade' and 'century'
   * Is 'this' equal to the 'value' provided
   * @param {number} value - the 'value' for comparison against
   * @param {string} [unit = undefined] - to compare against a specific unit of measurement
   * @returns {boolean}
   */
  return function (value, unit = undefined) {
    const valB = moment(value);
    if (unit === undefined || unit === null || !unitIsDecadeOrCentury(unit)) {
      return mIsSame.call(this, valB, unit);
    }
    return (
      getDecadeOrCentury(mClone.call(this), unit) ===
      getDecadeOrCentury(valB, unit)
    );
  };
}
