import unitIsDecadeOrCentury from './unitIsDecadeOrCentury';
/**
 * Internal helper method used by 'add' and 'subtract', this
 * gets the normalized unit value for all math operations
 * @param {function} normalize (alias for normalizeUnits - from moment)
 * @returns {string} unit - normalized 'unit' for math functions
 */
export default function getDef(normalize, unit) {
  let def = normalize.call(this, unit);
  return unitIsDecadeOrCentury(def) ? 'y' : def;
}
