# moment-extension

[demos](https://codesandbox.io/s/moment-extension-tew8y1)

This is a decorator for [MomentJs](https://momentjs.com), adding simple math support for 'decade' and 'century', method aliases for comparison methods, simple range methods, and more. 

It is written for modern browsers, and does not include CommonJs support.

There are no built-in dependencies to this project. As a decorator, it requires you to give it `moment`, even if previously decorated in some way.

## Install

```
npm install @cxing/moment-extension
```

## Usage

myMoment.js
```js
import moment from 'moment';
import 'moment-timezone'; // optionally
import decorate from '@cxing/moment-extension';

export default decorate(moment);
```

myPage.js
```js
import moment from './myMoment.js';

// Do something with it
```

## Supporting `decade` and `century`

These simple math and comparison methods have been overridden to support `decade` and `century` as a date/time `unit` without changing their standard method signatures.

- `add`
- `subtract`
- `startOf`
- `endOf`
- `isSame`
- `isBefore`
- `isAfter`
- `isSameOrBefore`
- `isSameOrAfter`

## Comparison Method Aliases

We've also provided aliases for all of the comparison methods, as well as one new one.

- `isSame()` -> `eq()`
- `isBefore()` -> `lt()`
- `isSameOrBefore()` -> `lte()`
- `isAfter()` -> `gt()`
- `isSameOrAfter()` -> `gte()`
- **New** `neq()` (`century` and `decade` are also supported)

## Simple Range Methods

We provided some simple Range Methods

- `moment.range({ start:moment, end:moment, [unit:string = 'day'], [step:number = 1] }) => moment[]` returns an array of `moment`s according to the `step` and `unit`, defaulting to 1/day from `start` to `end`
- `moment().inRange(start:moment, end:moment) => boolean` tells you if you're current `moment` falls within a specific range

## Calendar Convenience Methods

We also provide some basic convenience method for use with calendar scenarios.

- `moment().firstVisibleDay() => moment` gets the first visible calendar day of the `moment`'s `month` based upon what the `locale` gives for the first day of the week.
- `moment().lastVisibleDay() => moment` gets the last visible calendar day of the `moment`'s `month` based upon what the `locale` gives for the first day of the week.
- `moment().calendarDays([month:number = undefined]) => moment[]` gets an array of `moment`s representing the calendar days of the `moment`'s `month`. If a `month` is provided then it will return the days of that month, without mutating the `moment`.
- `moment().calendarMonths([year:number = undefined]) => moment()` gets an array of `moment`s representing the first day of each month of the `moment`'s `year`. If a `year` is provided then it will return the months of that year, without mutating the `moment`.
- `moment().calendarDecade([year:number = undefined]) => moment[]` gets an array of `moment`s representing the first day of each year of the `moment`'s `decade`. If a `year` is provided then it will return the years of the corresponding decade, without mutating the `moment`.

## Timezone Convenience Method

These are only relevant if you're using [moment-timezone](https://momentjs.com/timezone/). A `moment` object doesn't contain `zone` information unless it was either created with `moment.tz()` or you've `moment.tz.setDefault(someZone)`. The decorator will immediately `setDefault(moment.tz.guess)`, so that all `moment`s will have this information. We've also made it easier to set your timezone.

- `moment.setTimezone([zoneName|undefined])` If `undefined` is passed it will reset the default back to the `moment.tz.guess()`. If a `zoneName` is passed, and it is not a valid IANA timezone, it will throw an Error. **If you have not included `moment-timezone` then this will do nothing without error**
- `moment.currentIANAZoneName` is a new property to access the current default IANA timezone name.

Once called, this ensures that all future `moment`s are created using the supplied timezone. At an individual level this can still be overridden by using the `moment.tz(value, zoneName)` syntax.

## Validation Convenience Methods

Some developers use `moment` for building out calendar or date/time picker controls. These convenience methods are provided to do 'strict' validation of text input against a `format`.

- `moment.isValidForFormat(value:string, format:string) => moment|undefined` It the given `value` can be strictly parsed using the supplied `format` then it will return a moment. If it can not create a valid `moment` then it will return `undefined`. 
- `moment.validateInputValue(value:string, format:string, [maskChar:string = '_']) => moment|undefined` This will safely strip the `input` of any `maskChar`s, then trim that value, the run it through `isValidForFormat`. If the `input` is incomplete (stripped `maskChar`s) then it will fail 'strict' `format` validation and return `undefined`. If the `input` is complete, but incorrect, it will also fail 'strict' `format` validation.