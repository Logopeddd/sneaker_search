import { SIDEBAR_ENABLED } from '../actions';

export function sidebarEnabled(enabled) {
  return { type: SIDEBAR_ENABLED, enabled };
}
