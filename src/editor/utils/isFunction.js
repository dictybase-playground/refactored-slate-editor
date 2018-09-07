/**
 * Helper function that checks if a given item is a function.
 */

export const isFunction = v => {
  if (v instanceof Function) {
    return true
  }
  return false
}
