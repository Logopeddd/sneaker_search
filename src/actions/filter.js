import { CHANGE_FILTER_VISIBILITY } from '../actions';

export function filterDisplay(status) {
  return { type: CHANGE_FILTER_VISIBILITY, status };
}
