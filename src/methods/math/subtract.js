import getMathArgs from '../helpers/getMathArgs';
/**
 * Builds the 'subtract' override function
 * @param {Object} moment
 * @returns {function} (...args) => moment (matable adjusted value)
 */
export default function subtract(moment) {
  const mNormalizeUnits = moment.normalizeUnits;
  const mSubtract = moment.fn.subtract;
  /**
   * Extends moment native 'subtract' to support 'decade' and 'century'
   * @param {*}
   * @returns {moment} mutable adjusted value
   */
  return function (...args) {
    const [num, unit] = args;
    const { adder, def } = getMathArgs(mNormalizeUnits, { num, unit });
    return mSubtract.call(this, adder, def);
  };
}
