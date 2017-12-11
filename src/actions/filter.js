import { FILTER_DISPLAY } from '../actions';

export function filterDisplay(status) {
  return { type: FILTER_DISPLAY, status };
}
