import unitIsDecadeOrCentury from '../helpers/unitIsDecadeOrCentury';
import getDecadeOrCentury from '../helpers/getDecadeOrCentury';
/**
 * Builds the 'isSameOrBefore' override function
 * Also aliased as 'lte()'
 * @param {Object} moment
 * @returns {function} (value: number, [unit: string]) => boolean
 */
export default function isSameOrBefore(moment) {
  const mIsSameOrBefore = moment.fn.isSameOrBefore;
  const mClone = moment.fn.clone;
  /**
   * Extends moment native 'isSameOrBefore' to support 'decade' and 'century'
   * Is 'this' lte the 'value' provided
   * @param {number} value - the 'value' for comparison against
   * @param {string} [unit = undefined] - to compare against a specific unit of measurement
   * @returns {boolean}
   */
  return function (value, unit = undefined) {
    const valB = moment(value);
    if (unit === undefined || unit === null || !unitIsDecadeOrCentury(unit)) {
      return mIsSameOrBefore.call(this, valB, unit);
    }
    return (
      getDecadeOrCentury(mClone.call(this), unit) <=
      getDecadeOrCentury(valB, unit)
    );
  };
}
