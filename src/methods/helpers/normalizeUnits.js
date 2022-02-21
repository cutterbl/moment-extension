import unitIsDecadeOrCentury from './unitIsDecadeOrCentury';
/**
 * Builds the 'normalizeUnits' override function
 * @param {Object} moment
 * @returns {function} (unit:string) => string
 */
export default function normalizeUnits(moment) {
  const mNormalizeUnits = moment.normalizeUnits;
  /**
   * Extends moment native 'normalizeUnits' to support 'decade' and 'century'
   * @param {string} unit
   * @returns {string}
   */
  return function (unit) {
    if (unitIsDecadeOrCentury(unit)) {
      return unit;
    }
    return mNormalizeUnits.call(this, unit);
  };
}
