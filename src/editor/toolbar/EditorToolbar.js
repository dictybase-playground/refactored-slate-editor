import React from "react"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import { withStyles } from "@material-ui/core/styles"

import { BoldButton } from "editor/plugins/bold"

const styles = theme => ({
  toolbar: {
    // padding: "20px",
  },
})

/**
 * The toolbar for the page editor. It uses Material-UI's AppBar component as the foundation, then displays individual buttons inside of it.
 */

const EditorToolbar = props => {
  const { classes } = props
  return (
    <AppBar className={classes.toolbar} position="static" color="default">
      <Toolbar>
        <Typography variant="title" color="inherit">
          <BoldButton {...props} />
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default withStyles(styles)(EditorToolbar)
