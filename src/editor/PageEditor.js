import React from "react"
import { Editor } from "slate-react"
import { Value } from "slate"
import initialValue from "./data/initialValue.json"

class PageEditor extends React.Component {
  state = {
    value: Value.fromJSON(initialValue),
  }

  onChange = ({ value }) => {
    this.setState({ value })
  }

  render() {
    return <Editor value={this.state.value} onChange={this.onChange} />
  }
}

export default PageEditor
