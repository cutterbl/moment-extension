import moment from 'moment';
import decorate from '../../../decorate';

const extended = decorate(moment);

describe('isValidForFormat', function () {
  it(`should throw an error if you do not pass a 'format'`, function () {
    expect(() => extended.isValidForFormat('12/02/2022')).toThrow(
      `[moment.isValidForFormat] You did not supply a 'format'`
    );
  });

  it(`should return 'undefined' if you pass a falsy 'value'`, function () {
    expect(extended.isValidForFormat(undefined, 'MM/DD/YYYY')).toBe(undefined);
    expect(extended.isValidForFormat(null, 'MM/DD/YYYY')).toBe(undefined);
    expect(extended.isValidForFormat(0, 'MM/DD/YYYY')).toBe(undefined);
    expect(extended.isValidForFormat(false, 'MM/DD/YYYY')).toBe(undefined);
  });

  it(`should return a 'moment' if you pass a 'value' that can stricly be parsed by your supplied 'format'`, function () {
    let temp = extended.isValidForFormat('2022-02-22', 'YYYY-MM-DD');
    expect(extended.isMoment(temp)).toBeTruthy();
    temp = extended.isValidForFormat('2022-02-22T14:16:00Z', 'utc');
    expect(extended.isMoment(temp)).toBeTruthy();
  });

  it(`should return 'undefined' if you pass a 'value' that can not be stricly be parsed by your supplied 'format'`, function () {
    let temp = extended.isValidForFormat('2022-02', 'MM/DD/YYYY');
    expect(temp).toBeUndefined();
  });
});
