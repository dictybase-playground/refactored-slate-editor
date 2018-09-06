import React from "react"
import Grid from "@material-ui/core/Grid"
import PageEditor from "./editor/PageEditor"

const App = () => (
    <Grid container justify="center">
      <Grid item xs={12}>
      <center><PageEditor/></center>
      </Grid>
    </Grid>
  )

export default App
