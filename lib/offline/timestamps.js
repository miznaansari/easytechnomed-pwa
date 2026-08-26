/**
 * Strict UTC timestamp utilities for offline-first synchronization.
 * Always formats and compares dates in ISO 8601 UTC strings (e.g. 2026-08-26T10:19:45.000Z).
 */

/**
 * Returns current timestamp in ISO 8601 UTC string format.
 * @returns {string} e.g. "2026-08-26T10:19:45.000Z"
 */
export function getUtcIsoNow() {
  return new Date().toISOString();
}

/**
 * Converts any valid date representation into a standardized ISO 8601 UTC string.
 * Returns null if the date is null, undefined, or invalid.
 * @param {Date|string|number|null|undefined} date 
 * @returns {string|null}
 */
export function toUtcIso(date) {
  if (!date) return null;
  const d = new Date(date);
  if (isNaN(d.getTime())) return null;
  return d.toISOString();
}

/**
 * Compares two timestamps in UTC.
 * Returns:
 * - negative number if dateA < dateB (dateA is older)
 * - 0 if dateA === dateB
 * - positive number if dateA > dateB (dateA is newer)
 * @param {Date|string|number} dateA 
 * @param {Date|string|number} dateB 
 * @returns {number}
 */
export function compareUtc(dateA, dateB) {
  const timeA = dateA ? new Date(dateA).getTime() : 0;
  const timeB = dateB ? new Date(dateB).getTime() : 0;
  return timeA - timeB;
}

/**
 * Checks if the server timestamp is newer than the local timestamp.
 * @param {string|Date} localDate 
 * @param {string|Date} serverDate 
 * @returns {boolean}
 */
export function isServerNewer(localDate, serverDate) {
  if (!serverDate) return false;
  if (!localDate) return true;
  return new Date(serverDate).getTime() > new Date(localDate).getTime();
}

/**
 * Formats a UTC timestamp string for human-readable display in the local timezone.
 * @param {string|Date} date 
 * @param {Intl.DateTimeFormatOptions} [options]
 * @returns {string}
 */
export function formatLocalDisplay(date, options = {}) {
  if (!date) return "-";
  const d = new Date(date);
  if (isNaN(d.getTime())) return "-";
  return d.toLocaleString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    ...options,
  });
}
