import { MILI, units } from '../../defaults';
import unitIsDecadeOrCentury from '../helpers/unitIsDecadeOrCentury';
/**
 * Builds the 'endOf' override function
 * @param {Object} moment
 * @returns {function} (unit:string) => moment
 */
export default function endOf(moment) {
  const mStartOf = moment.fn.startOf;
  const mEndOf = moment.fn.endOf;
  /**
   * Extends moment native 'endOf' to support 'decade' and 'century'
   * @param {string} unit
   * @return {moment}
   */
  return function (unit) {
    if (unitIsDecadeOrCentury(unit)) {
      return mStartOf.call(this, unit).add(1, unit).subtract(1, units[MILI]);
    }
    return mEndOf.call(this, unit);
  };
}
