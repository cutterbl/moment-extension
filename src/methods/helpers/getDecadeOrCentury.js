import { DECADE } from '../../defaults';
import unitIsDecadeOrCentury from './unitIsDecadeOrCentury';
/**
 * Internal helper method used by comparison methods to help
 * determine values for 'decade' and 'century'
 * @param {moment} date
 * @returns {string} unit ('decade'|'century')
 */
export default function getDecadeOrCentury(date, unit) {
  if (unitIsDecadeOrCentury(unit)) {
    throw Error(
      `[moment Extended getDecadeOrCentury] cannot be called with a unit of ${unit}`
    );
  }
  const isDecade = unit === DECADE;
  const divisor = isDecade ? 10 : 100;
  const adder = isDecade ? '0' : '00';
  return parseInt(Math.floor(date.year() / divisor) + adder, 10);
}
