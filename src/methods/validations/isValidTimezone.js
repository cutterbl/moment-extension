/**
 * Internal helper method used to verify that a timezone value
 * is a valid IANA timezone supported by 'moment.tz'. If 'moment.tz'
 * is not available, this will always return false
 * @param {moment}
 * @param {string} zoneName - an IANA timezone name
 * @return {boolean}
 */
export default function isValidTimezone(moment, zoneName) {
  if (!moment.tz) {
    return false;
  }
  const result = moment.tz.zone.call(this, zoneName) !== null;
  if (!result) {
    // eslint-disable-next-line no-console
    console.warn(
      `You have attempted to set an invalid IANA timezone of '${zoneName}'.`
    );
  }
  return result;
}
