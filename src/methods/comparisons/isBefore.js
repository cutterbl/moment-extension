import unitIsDecadeOrCentury from '../helpers/unitIsDecadeOrCentury';
import getDecadeOrCentury from '../helpers/getDecadeOrCentury';
/**
 * Builds the 'isBefore' override function
 * Also aliased as 'lt()'
 * @param {Object} moment
 * @returns {function} (value: number, [unit: string]) => boolean
 */
export default function isBefore(moment) {
  const mIsBefore = moment.fn.isBefore;
  const mClone = moment.fn.clone;
  /**
   * Extends moment native 'isBefore' to support 'decade' and 'century'
   * Is 'this' lt/before the 'value' provided
   * @param {number} value - the 'value' for comparison against
   * @param {string} [unit = undefined] - to compare against a specific unit of measurement
   * @returns {boolean}
   */
  return function (value, unit = undefined) {
    const valB = moment(value);
    if (unit === undefined || unit === null || !unitIsDecadeOrCentury(unit)) {
      return mIsBefore.call(this, valB, unit);
    }
    return (
      getDecadeOrCentury(mClone.call(this), unit) <
      getDecadeOrCentury(valB, unit)
    );
  };
}
