import React from "react"
import { Editor } from "slate-react"
import { Value } from "slate"

import EditorToolbar from "./toolbar/EditorToolbar"
import renderMark from "./renderers/renderMark"
import plugins from "./plugins/plugins"
import initialValue from "./data/initialValue.json"

class PageEditor extends React.Component {
  state = {
    value: Value.fromJSON(initialValue),
  }

  onChange = ({ value }) => {
    this.setState({ value })
  }

  render() {
    const { value } = this.state

    return (
      <div>
        <EditorToolbar value={value} onChange={this.onChange} />
        <br />
        <Editor
          value={value}
          onChange={this.onChange}
          renderMark={renderMark}
          plugins={plugins}
        />
      </div>
    )
  }
}

export default PageEditor
