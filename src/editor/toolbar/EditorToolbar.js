import React from "react"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import { withStyles } from "@material-ui/core/styles"

const styles = theme => ({
  toolbar: {
    // padding: "20px",
  },
})

const EditorToolbar = props => {
  const { classes } = props
  return (
    <AppBar className={classes.toolbar} position="static" color="default">
      <Toolbar>
        <Typography variant="title" color="inherit">
          This is a toolbar. Coming soon: buttons.
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default withStyles(styles)(EditorToolbar)