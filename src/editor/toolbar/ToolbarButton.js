import React from "react"
import Button from "@material-ui/core/Button"
import { withStyles } from "@material-ui/core/styles"

import { isFunction } from "../utils/isFunction"

const styles = theme => ({
  button: {
    padding: "5px",
    minWidth: "30px",
    minHeight: 0,
  },
})

const ToolbarButton = ({ children, onClick, classes, ...props }) => {
  const handleClick = e => {
    isFunction(onClick) && onClick(e)
  }

  return (
    <Button className={classes.button} onClick={handleClick} {...props}>
      {children}
    </Button>
  )
}

export default withStyles(styles)(ToolbarButton)
