/**
 * Builds the 'isValidForFormat()' extension function
 * @param {object} moment
 * @returns {function} (value: string, format: string) => moment|undefined
 */
export default function isValidForFormat(moment) {
  /**
   * If the passed 'value' can be parsed using the supplied 'format' then
   * receive a valid 'moment' of that 'value', else 'undefined'
   * @param {string} value - a string representation of a date/time/datetime
   * @param {string} format - a string representation of a date/time/datetime format of the value
   * @returns {moment|undefined}
   */
  return function (value, format) {
    if (!format) {
      throw Error(`[moment.isValidForFormat] You did not supply a 'format'`);
    }
    if (!value) {
      return undefined;
    }
    const temp = moment(value, format !== 'utc' ? format : null, true);
    return temp.isValid() ? moment(temp) : undefined;
  };
}
