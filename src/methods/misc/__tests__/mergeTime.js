import moment from 'moment';
import decorate from '../../../decorate';

const extended = decorate(moment);

describe('mergeTime', function () {
  it(`should merge a 'time' into the 'moment'`, function () {
    const base = extended();
    const time = '14:35:19';
    base.mergeTime(time);
    expect(base.format('HH:mm:ss')).toBe(time);
    expect(base.hour()).toBe(14);
    expect(base.minute()).toBe(35);
    expect(base.second()).toBe(19);
    expect(base.millisecond()).toBe(0);
  });
});
