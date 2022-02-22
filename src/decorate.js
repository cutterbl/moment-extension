import normalizeUnits from './methods/helpers/normalizeUnits';
import add from './methods/math/add';
import subtract from './methods/math/subtract';
import startOf from './methods/math/startOf';
import endOf from './methods/math/endOf';
import isSame from './methods/comparisons/isSame';
import neq from './methods/comparisons/neq';
import isAfter from './methods/comparisons/isAfter';
import isSameOrAfter from './methods/comparisons/isSameOrAfter';
import isBefore from './methods/comparisons/isBefore';
import isSameOrBefore from './methods/comparisons/isSameOrBefore';
import inRange from './methods/range/inRange';
import firstVisibleDay from './methods/calendar/firstVisibleDay';
import lastVisibleDay from './methods/calendar/lastVisibleDay';
import range from './methods/range/range';
import calendarDays from './methods/calendar/calendarDays';
import calendarMonths from './methods/calendar/calendarMonths';
import calendarDecade from './methods/calendar/calendarDecade';
import mergeTime from './methods/misc/mergeTime';
import setTimezone from './methods/misc/setTimezone';
import isValidForFormat from './methods/validations/isValidForFormat';
import validateInputValue from './methods/validations/validateInputValue';

/**
 * This will 'decorate' moment with override methods and additional
 * methods supporting calendar specific details and validation
 * @param {Object} moment - https://momentjs.com
 * @returns {Object} moment
 */
export default function decorate(moment) {
  /**
   * If moment-timezone is present, I always want the
   * zone info to be included in any moment I create
   */
  if (moment.tz) {
    moment.tz.setDefault(moment.tz.guess());
  }

  const extended = function (...args) {
    moment.call(this, ...args);
  };
  extended.prototype = Object.create(moment);
  extended.prototype.constructor = extended;

  /**
   * Each of this functions takes 'moment' and returns
   * a function that overrides (as well as uses) the
   * moment native function of the same name. We do
   * this to manage scope between what 'in' moment
   * and what's in our code here, at the same time.
   */
  moment.normalizeUnits = normalizeUnits(moment);
  moment.fn.add = add(moment);
  moment.fn.subtract = subtract(moment);
  moment.fn.startOf = startOf(moment);
  moment.fn.endOf = endOf(moment);
  moment.fn.isSame = isSame(moment);
  moment.fn.eq = moment.fn.isSame;
  moment.fn.neq = neq(moment);
  moment.fn.isAfter = isAfter(moment);
  moment.fn.gt = moment.fn.isAfter;
  moment.fn.isSameOrAfter = isSameOrAfter(moment);
  moment.fn.gte = moment.fn.isSameOrAfter;
  moment.fn.isBefore = isBefore(moment);
  moment.fn.lt = moment.fn.isBefore;
  moment.fn.isSameOrBefore = isSameOrBefore(moment);
  moment.fn.lte = moment.fn.isSameOrBefore;
  moment.fn.inRange = inRange(moment);
  moment.fn.firstVisibleDay = firstVisibleDay(moment);
  moment.fn.lastVisibleDay = lastVisibleDay(moment);
  moment.range = range;
  moment.fn.calendarDays = calendarDays(moment);
  moment.fn.calendarMonths = calendarMonths(moment);
  moment.fn.calendarDecade = calendarDecade(moment);
  moment.fn.mergeTime = mergeTime(moment);
  moment.setTimezone = setTimezone(moment);
  moment.isValidForFormat = isValidForFormat(moment);
  moment.validateInputValue = validateInputValue(moment);

  moment.prototype = extended;

  return moment;
}
