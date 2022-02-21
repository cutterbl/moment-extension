import { units, DECADE, YEAR } from '../../defaults';
import unitIsDecadeOrCentury from '../helpers/unitIsDecadeOrCentury';
/**
 * Builds the 'startOf' override function
 * @param {Object} moment
 * @returns {function} (unit:string) => moment
 */
export default function startOf(moment) {
  const mClone = moment.fn.clone;
  const mSubtract = moment.fn.subtract;
  const mStartOf = moment.fn.startOf;
  /**
   * Extends moment native 'startOf' to support 'decade' and 'century'
   * @param {string} unit
   * @return {moment}
   */
  return function (unit) {
    if (unitIsDecadeOrCentury(unit)) {
      const divisor = unit === DECADE ? 10 : 100;
      const year = mClone.call(this).year();
      return mSubtract
        .call(this, year % divisor, units[YEAR])
        .startOf(units[YEAR]);
    }
    return mStartOf.call(this, unit);
  };
}
