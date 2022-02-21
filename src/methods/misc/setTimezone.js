import isValidTimezone from '../validations/isValidTimezone';
/**
 * Builds the 'setTimezone()' function
 * @param {Object} moment
 * @returns {function} (value: string) => void
 */
export default function setTimezone(moment) {
  const tz = moment.tz;
  /**
   * If 'moment.tz' is available, and the passed 'value' is
   * a valid IANA timezone, this convenience method will make
   * it the default for all 'moment's made going forward.
   * @param {string} value - Should be a valid IANA timezone
   */
  return function (value = moment?.tz?.guess?.()) {
    if (tz && isValidTimezone(moment, value)) {
      moment.tz.setDefault.call(this, value);
    }
  };
}
