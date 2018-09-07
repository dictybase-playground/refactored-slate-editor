import React from "react"
import Tooltip from "@material-ui/core/Tooltip"
import FormatBoldIcon from "@material-ui/icons/FormatBold"

import ToolbarButton from "editor/toolbar/ToolbarButton"
import { isMod } from "editor/utils/isMod"

/**
 * Function that toggles the mark type.
 */
const boldMarkStrategy = change => change.toggleMark("bold")

/**
 * Rendering component that provides the actual HTML to use inside the editor.
 */
const BoldMark = ({ children }) => <strong>{children}</strong>

/**
 * Bold button that uses a click handler to connect the button to the editor.
 */
const BoldButton = ({ value, onChange }) => {
  const handleClick = e => {
    onChange(boldMarkStrategy(value.change()))
  }

  return (
    <Tooltip title="ctrl + b" placement="bottom">
      <ToolbarButton onClick={handleClick}>
        <FormatBoldIcon />
      </ToolbarButton>
    </Tooltip>
  )
}

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

export { BoldPlugin, BoldMark, BoldButton }