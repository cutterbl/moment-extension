/**
 * Builds the 'validateInputValue()' convenience method
 * @param {object} moment
 * @returns {function} (input: string, format: string, [mask: string = ' __']) => moment|undefined
 */
export default function validateInputValue(moment) {
  /**
   * Validates an 'input' value, against a valid parser 'format', and
   * returns a 'moment' if valid, or 'undefined'
   * @param {string} input - a string value to represent a date
   * @param {string} format - a string value representing a moment parser
   * @param {string} [maskChar='_'] - a string representing a value to replace from the current input
   * @returns {moment|undefined}
   */
  return function (input, format, maskChar = '_') {
    if (!format) {
      throw Error(`[moment.validateInputValue] You did not supply a 'format'`);
    }
    if (!input) {
      return undefined;
    }
    const maskRegEx = new RegExp(`[${maskChar}(?<=${maskChar}):]`, 'g');
    const value = input.replace(maskRegEx, '').trim();
    return moment.isValidForFormat(value, format);
  };
}
