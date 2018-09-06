import { isMod } from "../../utils/isMod"
import { boldMarkStrategy } from "./BoldUtils"

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

export default BoldKeyboardShortcut
