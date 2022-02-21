import getAdder from './getAdder';
import getDef from './getDef';
/**
 * @typedef {object} DestructuredArguments
 * @property {number} num
 * @property {string} unit
 */
/**
 * Internal helper method used by 'add' and 'subtract', this
 * gets the math arguments used in math operations
 * @param {function} normalize - (alias for normalizeUnits from moment)
 * @param {DestructuredArguments}
 * @returns {object} - {adder: number, def: string}
 */
export default function getMathArgs(normalize, { num, unit }) {
  return {
    adder: getAdder({ num, unit }),
    def: getDef(normalize, unit),
  };
}
