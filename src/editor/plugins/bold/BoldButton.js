import React from "react"
import Tooltip from "@material-ui/core/Tooltip"
import FormatBoldIcon from "@material-ui/icons/FormatBold"
import ToolbarButton from "editor/toolbar/ToolbarButton"

import { boldMarkStrategy } from "./"

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

export default BoldButton
