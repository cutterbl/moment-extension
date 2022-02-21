import getMathArgs from '../helpers/getMathArgs';
/**
 * Builds the 'add' override function
 * @param {Object} moment
 * @returns {function} (...args) => moment (matable adjusted value)
 */
export default function add(moment) {
  const mNormalizeUnits = moment.normalizeUnits;
  const mAdd = moment.fn.add;
  /**
   * Extends moment native 'add' to support 'decade' and 'century'
   * @param {*}
   * @returns {moment} mutable adjusted value
   */
  return function (...args) {
    const [num, unit] = args;
    const { adder, def } = getMathArgs(mNormalizeUnits, { num, unit });
    return mAdd.call(this, adder, def);
  };
}
