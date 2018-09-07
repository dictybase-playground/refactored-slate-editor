import React from "react"
import { Editor } from "slate-react"
import { Value } from "slate"

import EditorToolbar from "./toolbar/EditorToolbar"
import initialValue from "./data/initialValue.json"
import { BoldMark } from "./plugins/bold"
import { BoldPlugin } from "./plugins/bold"

// all of the plugins that go into our editor
// these are generally keyboard shortcuts
const plugins = [BoldPlugin()]

// necessary renderMark function that receives the mark type then renders the HTML
// in our case, we are returning custom components
const renderMark = (props: Props) => {
  const { mark } = props

  switch (mark.type) {
    case "bold":
      return <BoldMark {...props} />

    default:
      return null
  }
}

/**
 * The main PageEditor component. It displays both the toolbar and the Slate Editor component, passing in value and onChange as props to both.
 */

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
