import { units, DAY } from '../../defaults';
/**
 * @typedef {object} DestructuredArguments
 * @property {moment} start
 * @property {moment} end
 * @property {string} [unit = 'd']
 * @property {number} [step = 1]
 */
/**
 * Takes a 'start' and 'end', and optional 'unit' and 'step', to
 * create an array of 'moment's representing the range. Defaults
 * to 1 item/day.
 * @param {DestructuredArguments}
 * @return {moment[]}
 */
export default function range({ start, end, unit = units[DAY], step = 1 }) {
  let current = start.clone();

  const items = [];
  while (current.lte(end, unit)) {
    items.push(current);
    current = current.clone().add(step, unit);
  }
  return items;
}
