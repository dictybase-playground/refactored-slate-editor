import React from "react"
import { Editor } from "slate-react"
import { Value } from "slate"

import EditorToolbar from "./toolbar/EditorToolbar"
import initialValue from "./data/initialValue.json"

/** Import renderers */
import { BoldMark } from "./plugins/bold"
import { ItalicMark } from "./plugins/italic"
import { StrikethroughMark } from "./plugins/strikethrough"
import { UnderlineMark } from "./plugins/underline"

/** Import custom plugins */
import { BoldPlugin } from "./plugins/bold"
import { ItalicPlugin } from "./plugins/italic"
import { StrikethroughPlugin } from "./plugins/strikethrough"
import { UnderlinePlugin } from "./plugins/underline"

// all of the plugins that go into our editor
// these are generally keyboard shortcuts
const plugins = [
  BoldPlugin(),
  ItalicPlugin(),
  StrikethroughPlugin(),
  UnderlinePlugin(),
]

// necessary renderMark function that receives the mark type then renders the HTML
// in our case, we are returning custom components
const renderMark = (props: Props) => {
  const { mark } = props

  switch (mark.type) {
    case "bold":
      return <BoldMark {...props} />
    case "italic":
      return <ItalicMark {...props} />
    case "strikethrough":
      return <StrikethroughMark {...props} />
    case "underline":
      return <UnderlineMark {...props} />

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
