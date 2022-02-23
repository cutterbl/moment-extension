import moment from 'moment';
import decorate from '../../../decorate';

describe('setTimezone', function () {
  it(`should do nothing without 'moment-timezone'`, function () {
    const extended = decorate(moment);
    extended.setTimezone('America/Chicago');
    const first = extended([2022, 1, 22]).utcOffset();
    extended.setTimezone('America/New_York');
    const second = extended([2022, 1, 22]).utcOffset();
    expect(Math.abs(first - second)).toBe(0);
  });

  it(`should set the 'timezone' that 'moment' will use`, async function () {
    await import('moment-timezone');
    const extended = decorate(moment);
    extended.setTimezone('America/Chicago');
    const first = extended([2022, 1, 22]).utcOffset(); // -360
    extended.setTimezone('America/New_York');
    const second = extended([2022, 1, 22]).utcOffset(); // -300
    const third = extended([2022, 1, 23]).utcOffset();
    expect(Math.abs(first - second)).toBe(60);
    expect(Math.abs(second - third)).toBe(0);
  });

  it(`should have an accessible 'currentIANAZoneName'`, async function () {
    await import('moment-timezone');
    const extended = decorate(moment);
    expect(moment.currentIANAZoneName).toBe(moment.tz.guess());
    extended.setTimezone('America/New_York');
    expect(moment.currentIANAZoneName).toBe('America/New_York');
  });

  it(`should throw an error if you try to set an invalid 'timezone'`, async function () {
    await import('moment-timezone');
    const extended = decorate(moment);
    expect(() => extended.setTimezone('foo')).toThrow(
      `You have attempted to set an invalid IANA timezone of 'foo'`
    );
  });
});
