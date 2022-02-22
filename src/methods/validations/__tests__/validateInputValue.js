import moment from 'moment';
import decorate from '../../../decorate';

const extended = decorate(moment);

describe('validateInputValue', function () {
  it(`should throw an error if you do not pass a 'format'`, function () {
    expect(() => extended.validateInputValue('12/02/2022')).toThrow(
      `[moment.validateInputValue] You did not supply a 'format'`
    );
  });

  it(`should return 'undefined' if you pass a falsy 'value'`, function () {
    expect(extended.validateInputValue(undefined, 'MM/DD/YYYY')).toBe(
      undefined
    );
    expect(extended.validateInputValue(null, 'MM/DD/YYYY')).toBe(undefined);
    expect(extended.validateInputValue(0, 'MM/DD/YYYY')).toBe(undefined);
    expect(extended.validateInputValue(false, 'MM/DD/YYYY')).toBe(undefined);
  });

  it(`should return a 'moment' if you pass a 'value' that can stricly be parsed by your supplied 'format'`, function () {
    let temp = extended.validateInputValue('2022-02-22', 'YYYY-MM-DD');
    expect(extended.isMoment(temp)).toBeTruthy();
  });

  it(`should return 'undefined' if you pass a 'value' that can not be stricly be parsed by your supplied 'format'`, function () {
    let temp = extended.validateInputValue('2022-02', 'MM/DD/YYYY');
    expect(temp).toBeUndefined();
  });

  it(`should remove 'maskChar' from the 'input', but return 'undefined' for being incomplete`, function () {
    let temp = extended.validateInputValue(
      '02/22/1987 12:__ __',
      'MM/DD/YYYY hh:mm A'
    );
    expect(temp).toBeUndefined();
  });
});
