import React from "react"
import Tooltip from "@material-ui/core/Tooltip"
import ImageIcon from "@material-ui/icons/Image"

import ToolbarButton from "editor/toolbar/ToolbarButton"
import { isMod } from "editor/utils/isMod"

/**
 * Functions to set the image blocks.
 */
const insertImage = (change, src, target) => {
  if (target) {
    change.select(target)
  }

  change.insertBlock({
    type: "image",
    isVoid: true,
    data: { src },
  })
}

const insertImageStrategy = change => {
  const { value } = change
  const src = window.prompt("Enter the URL of the image:")
  if (!src) return

  return value.change().call(insertImage, src)
}

/**
 * Rendering components that provide the actual HTML to use inside the editor.
 */
const ImageNode = ({ children, attributes, node }) => {
  const { data } = node
  const src = data.get("src")
  return <img src={src} {...attributes} alt="" />
}

/**
 * Button components that use click handlers to connect to the editor.
 */
const ImageButton = ({ value, onChange }) => {
  const handleClick = e => {
    onChange(insertImageStrategy(value.change()))
  }

  return (
    <Tooltip title="image" placement="bottom">
      <ToolbarButton onClick={handleClick}>
        <ImageIcon />
      </ToolbarButton>
    </Tooltip>
  )
}

/**
 * Function that specifies the keyboard shortcuts to use for images.
 * It accepts event and change as arguments.
 */
const ImageKeyboardShortcut = (event, change) => {
  if (isMod(event) && event.key === "i") return insertImageStrategy(change)
  return
}

/**
 * Function that represents our actual plugin.
 * It takes options in case we want to add more to it in the future.
 */
const ImagePlugin = options => ({
  onKeyDown(...args) {
    return ImageKeyboardShortcut(...args)
  },
})

/**
 * Export everything needed for the editor.
 */
export { ImageNode, ImageButton, ImagePlugin }
