/**
 * Helper function that checks if the meta or ctrl key is pressed.
 * metaKey = ⌘ for Mac, ⊞ for Windows
 */

export const isMod = event => (event.metaKey && !event.ctrlKey) || event.ctrlKey
