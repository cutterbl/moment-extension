import { DECADE, CENTURY } from '../../defaults';
/**
 * Internal helper method.
 * Determines whether the passed 'unit' was 'decade' or 'century'
 * @param {string} unit
 * @returns {boolean}
 */
export default function unitIsDecadeOrCentury(unit) {
  return [DECADE, CENTURY].includes(unit);
}
