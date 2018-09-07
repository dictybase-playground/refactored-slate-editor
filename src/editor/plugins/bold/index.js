// Rendering
import BoldMark from "./BoldMark"
// External
import BoldButton from "./BoldButton"
// Util
import { isMod } from "editor/utils/isMod"

/**
 * Function that toggles the mark type.
 */
const boldMarkStrategy = change => change.toggleMark("bold")

/**
 * Function that specifies the keyboard shortcut to use for bold.
 * It accepts event and change as arguments.
 */
const BoldKeyboardShortcut = (event, change) => {
  if (isMod(event) && event.key === "b") {
    return boldMarkStrategy(change)
  }
  return
}

/**
 * Function that represents our actual plugin.
 * It takes options in case we want to add more to it in the future.
 */
const BoldPlugin = options => ({
  onKeyDown(...args) {
    return BoldKeyboardShortcut(...args)
  },
})

export { BoldPlugin, BoldMark, BoldButton, boldMarkStrategy }
