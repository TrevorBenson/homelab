import { bench, describe } from 'vitest';
import { formatRelativeTime } from '../src/utils/formatRelativeTime';

const now = Date.now();

const minutesAgo = new Date(now - 5 * 60 * 1000);
const hoursAgo = new Date(now - 5 * 60 * 60 * 1000);
const daysAgo = new Date(now - 3 * 24 * 60 * 60 * 1000);
const weeksAgo = new Date(now - 30 * 24 * 60 * 60 * 1000);

describe('formatRelativeTime', () => {
  bench('minutes ago', () => {
    formatRelativeTime(minutesAgo);
  });

  bench('hours ago', () => {
    formatRelativeTime(hoursAgo);
  });

  bench('days ago', () => {
    formatRelativeTime(daysAgo);
  });

  bench('weeks ago (toLocaleDateString path)', () => {
    formatRelativeTime(weeksAgo);
  });
});
