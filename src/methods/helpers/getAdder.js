import { DECADE } from '../../defaults';
import unitIsDecadeOrCentury from './unitIsDecadeOrCentury';
/**
 * @typedef {object} DestructuredArguments
 * @property {number} num
 * @property {string} unit
 */
/**
 * Internal helper method used by 'add' and 'subtract', this
 * gets the 'adder' value used in those calculations
 * @param {DestructuredArguments}
 * @returns {number}
 */
export default function getAdder({ num, unit }) {
  if (unitIsDecadeOrCentury(unit)) {
    return unit === DECADE ? num * 10 : num * 100;
  }
  return num;
}
