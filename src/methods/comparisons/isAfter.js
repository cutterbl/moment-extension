import unitIsDecadeOrCentury from '../helpers/unitIsDecadeOrCentury';
import getDecadeOrCentury from '../helpers/getDecadeOrCentury';

/**
 * Builds the 'isAfter' override function
 * Also aliased as 'gt()'
 * @param {Object} moment
 * @returns {function} (value: number, [unit: string]) => boolean
 */
export default function isAfter(moment) {
  const mIsAfter = moment.fn.isAfter;
  const mClone = moment.fn.clone;
  /**
   * Extends moment native 'isAfter' to support 'decade' and 'century'
   * Is 'this' gt/after the 'value' provided
   * @param {number} value - the 'value' for comparison against
   * @param {string} [unit = undefined] - to compare against a specific unit of measurement
   * @returns {boolean}
   */
  return function (value, unit = undefined) {
    const valB = moment(value);
    if (unit === undefined || unit === null || !unitIsDecadeOrCentury(unit)) {
      return mIsAfter.call(this, valB, unit);
    }
    return (
      getDecadeOrCentury(mClone.call(this), unit) >
      getDecadeOrCentury(valB, unit)
    );
  };
}
