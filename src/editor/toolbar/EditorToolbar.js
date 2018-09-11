import React from "react"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import { withStyles } from "@material-ui/core/styles"

/** import toolbar buttons */
import { BoldButton } from "editor/plugins/bold"
import { ItalicButton } from "editor/plugins/italic"
import { StrikethroughButton } from "editor/plugins/strikethrough"
import { UnderlineButton } from "editor/plugins/underline"

import {
  AlignmentLeftButton,
  AlignmentCenterButton,
  AlignmentRightButton,
} from "editor/plugins/alignment"
import { FontFamilyDropdown } from "editor/plugins/fontfamily"
import { H1Button, H2Button, H3Button } from "editor/plugins/heading"
import { ImageButton } from "editor/plugins/image"
import { LinkButton } from "editor/plugins/link"
import { OrderedListButton, UnorderedListButton } from "editor/plugins/list"

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
          <ItalicButton {...props} />
          <UnderlineButton {...props} />
          <StrikethroughButton {...props} />
          <AlignmentLeftButton {...props} />
          <AlignmentCenterButton {...props} />
          <AlignmentRightButton {...props} />
          <UnorderedListButton {...props} />
          <OrderedListButton {...props} />
          <H1Button {...props} />
          <H2Button {...props} />
          <H3Button {...props} />
          <LinkButton {...props} />
          <ImageButton {...props} />
          <FontFamilyDropdown {...props} />
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default withStyles(styles)(EditorToolbar)
