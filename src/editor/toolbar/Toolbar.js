import React from "react"
import AppBar from "@material-ui/core/AppBar"
import { withStyles } from "@material-ui/core/styles"

const styles = theme => ({
  toolbar: {
    padding: "20px"
  }
})

const Toolbar = props => {
  const { classes } = props
  return (
    <AppBar className={classes.toolbar} position="static" color="default">
      This is a toolbar. Coming soon: buttons.
    </AppBar>
  )
}

export default withStyles(styles)(Toolbar)
