/**
 * Helper function that checks if a given item is a function.
 */

const isFunction = v => {
  if (v instanceof Function) {
    return true
  }
  return false
}

/**
 * Helper function that checks if the meta or ctrl key is pressed.
 * metaKey = ⌘ for Mac, ⊞ for Windows
 */

const isMod = event => (event.metaKey && !event.ctrlKey) || event.ctrlKey

export { isFunction, isMod }
