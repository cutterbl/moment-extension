import unitIsDecadeOrCentury from '../helpers/unitIsDecadeOrCentury';
import getDecadeOrCentury from '../helpers/getDecadeOrCentury';
/**
 * Builds the 'isSameOrAfter' override function
 * Also aliased as 'gte()'
 * @param {Object} moment
 * @returns {function} (value: number, [unit: string]) => boolean
 */
export default function isSameOrAfter(moment) {
  const mIsSameOrAfter = moment.fn.isSameOrAfter;
  const mClone = moment.fn.clone;
  /**
   * Extends moment native 'isSameOrAger' to support 'decade' and 'century'
   * Is 'this' gte the 'value' provided
   * @param {number} value - the 'value' for comparison against
   * @param {string} [unit = undefined] - to compare against a specific unit of measurement
   * @returns {boolean}
   */
  return function (value, unit = undefined) {
    const valB = moment(value);
    if (unit === undefined || unit === null || !unitIsDecadeOrCentury(unit)) {
      return mIsSameOrAfter.call(this, valB, unit);
    }
    return (
      getDecadeOrCentury(mClone.call(this), unit) >=
      getDecadeOrCentury(valB, unit)
    );
  };
}
